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
 mutation AddSkill($name: String!, $price: Float!, $description: String, $category: ID!) {
  addSkill(name: $name, price: $price, description: $description, category: $category) {
    description
    name
    price
  }
}
`;

// export const QUERY_SKILL = gql`
//   query Skill($id: ID!) {
//   skill(_id: $id) {
//     _id
//     category {
//       _id
//       name
//     }
//     description
//     name
//     image
//     price
//   }
// }
// `;


// export const QUERY_SKILLS = gql`
//  query Skills($category: ID, $name: String) {
//   skills(category: $category, name: $name) {
//     _id
//     category {
//       _id
//       name
//     }
//     description
//     image
//     name
//     price
//   }
// }
// `;

// export const QUERY_CATEGORIES = gql`
//  query Categories {
//   categories {
//     _id
//     name
//   }
// }
// `;

