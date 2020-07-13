import gql from "graphql-tag";

export const GET_PRODUCTS = gql`
  query ShopQuery($first: Int) {
    shop {
      name
      contactEmail
    }
    products(first: $first) {
      edges {
        node {
          id
          title
          totalInventory
        }
      }
    }
  }
`;
