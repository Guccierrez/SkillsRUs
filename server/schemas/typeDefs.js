const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Category {
    _id: ID
    name: String!
  }


  type Skill {
    _id: ID
    name: String!
    description: String
    image: String
    price: Float!
    category: Category!
  }
  
  type User {
    _id: ID
    name: String!
    email: String!
    savedSkills: [Skill]
    
  }



  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories: [Category!]
    skills(category: ID, name: String): [Skill]
    skill(_id: ID!): Skill
    user: User
  
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!): Auth
    addSkill(name:String!, description: String, image:String, price:Float!, category: ID!): Skill
    login(email: String!, password: String!): Auth
    removeSkill(skillId: ID): User
    addCategory(category: ID, name:String!):Category
  }
`;

module.exports = typeDefs;
