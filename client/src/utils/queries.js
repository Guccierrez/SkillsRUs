import { gql } from '@apollo/client';

export const QUERY_SKILLS = gql`
  query getSkills($category: ID) {
    skills(category: $category) {
      _id
      name
      description
      price
      quantity
      image
      category {
        _id
      }
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
      quantity
      category {
        name
      }
    }
  }
`;







export const QUERY_SKILL = gql`
  query Skill($id: ID!) {
  skill(_id: $id) {
    _id
    category {
      _id
      name
    }
    description
    name
    image
    price
  }
}
`;





export const QUERY_SKILLS = gql`
 query Skills($category: ID, $name: String) {
  skills(category: $category, name: $name) {
    _id
    category {
      _id
      name

    }
    description
    image
    name
    price
  }
}
`;

export const QUERY_CATEGORIES = gql`
 query Categories {
  categories {
    _id
    name
  }
}
`;

export const QUERY_USER = gql`
query User {
  user {
    _id
    email
    name
  }
}
`;
