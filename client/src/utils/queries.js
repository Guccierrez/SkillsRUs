import { gql } from '@apollo/client';



export const QUERY_SKILLS = gql`
query Query($id: ID!) {
  skill(_id: $id) {
    _id
    image
    description
    name
    price
  }
}
`;
export const QUERY_CHECKOUT = gql`
  query getCheckout($skills: [ID]!) {
    checkout(skills: $skills) {
      session
    }
  }
`;

export const QUERY_ALL_SKILLS = gql`
  {
    skills {
      _id
      name
      description
      price
      category {
        name
      }
    }
  }
`;

export const QUERY_CATEGORIES = gql`
 {
  categories {
    _id
    name
  }
}
`;

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      orders {
        _id
        purchaseDate
        skills {
          _id
          name
          description
          price
          image
        }
      }
    }
  }
`;

