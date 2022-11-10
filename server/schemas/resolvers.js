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
        const user = await User.findById(context.user._id).populate({
          path: 'skills',
          populate: 'category'
        });

       

        return user;
      }

      throw new AuthenticationError('Not logged in');
    },
  
   
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


              return skill ;

      }
      
      throw new AuthenticationError('Not logged in');
    },

    removeSkill: async (parent,  args, context) => {
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { savedSills: {skillId: args.skillId} } },
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
