import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;



export const ADD_USER = gql`
 mutation AddUser($name: String!, $email: String!, $password: String!) {
  addUser(name: $name, email: $email, password: $password) {
    token
    user {
      email
      name
    }
  }
}
`;

export const ADD_SKILL =gql`
 mutation AddSkill($name: String!, $price: Float!, $description: String ) {
  addSkill(name: $name, price: $price, description: $description) {
    description
    name
    price
   
  }
}
`;

export const REMOVE_SKILL =gql`
mutation RemoveSkill($skillId: ID) {
  removeSkill(skillId: $skillId) {
    name
  }
}
`;


