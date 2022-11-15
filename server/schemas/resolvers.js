const { AuthenticationError } = require('apollo-server-express');
const { User, Skill, Category  } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
  Query: {
    categories: async () => {
      return await Category.find();
    },
    skills: async (parent, { category, name }) => {
      const params = {};

      if (category) {
        params.category = category;
      }

      if (name) {
        params.name = {
          $regex: name
        };
      }

      return await Skill.find(params).populate('category');
    },
    skill: async (parent, { _id }) => {
      return await Skill.findById(_id).populate('category');
    },
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id)
        .populate ("skills")
        .populate({
          path: 'skills',
          populate: 'category'
        });

       

        return user;
      }

      throw new AuthenticationError('Not logged in');
    },
  
    // order: async (parent, { _id }, context) => {
    //   if (context.user) {
    //     const user = await User.findById(context.user._id).populate({
    //       path: 'orders.skills',
    //       populate: 'category'
    //     });

    //     return user.orders.id(_id);
    //   }

    //   throw new AuthenticationError('Not logged in');
    // },
    // checkout: async (parent, args, context) => {
    //   const url = new URL(context.headers.referer).origin;
    //   const order = new Order({ skills: args.skills });
    //   const line_items = [];

    //   const { skills } = await order.populate('skills');

    //   for (let i = 0; i < skills.length; i++) {
    //     const skill = await stripe.skills.create({
    //       name: skills[i].name,
    //       description: skills[i].description,
    //       images: [`${url}/images/${skills[i].image}`]
    //     });

    //     const price = await stripe.prices.create({
    //       skill: skill.id,
    //       unit_amount: skills[i].price * 100,
    //       currency: 'usd',
    //     });

    //     line_items.push({
    //       price: price.id,
    //       quantity: 1
    //     });
    //   }

    //   const session = await stripe.checkout.sessions.create({
    //     payment_method_types: ['card'],
    //     line_items,
    //     mode: 'payment',
    //     success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
    //     cancel_url: `${url}/`
    //   });

    //   return { session: session.id };
    // }

  },
  Mutation: {

    addCategory: async (parent, args, context) => {
      if (context.user){
        
              const category = await Category.create(args);


              return category ;

      }
      
      throw new AuthenticationError('Not logged in');
    },
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    
   
    addSkill: async (parent, args, context) => {
      if (context.user){
        
    
              const skill =  (await Skill.create(args));
              console.log(skill._id);
              const user = await  User.findOneAndUpdate(
                { _id: context.user._id },
                { $addToSet: { skills: skill._id } },
                { new: true }
              );
                console.log(user)
              return skill ;

      }
      
      throw new AuthenticationError('Not logged in');
    },

    removeSkill: async (parent,  args, context) => {
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { skills: {skillId: args.skillId} } },
          { new: true }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    
    
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    }
  }
};

module.exports = resolvers;
