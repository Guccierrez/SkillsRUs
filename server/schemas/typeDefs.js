const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Category {
    _id: ID
    name: String!
  }

  type Skills {
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
    
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories: [Category!]
    skills(category: ID, name: String): [Skills]
    skill(_id: ID!): Skills
    user: User
  
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addSkill(skills: [ID]!): Skills
    updateSkill(_id: ID!, ): Skills
    login(email: String!, password: String!): Auth
    removeSkill:(id_: ID!): Skills
  }
`;

module.exports = typeDefs;
