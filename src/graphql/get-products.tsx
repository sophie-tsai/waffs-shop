import gql from "graphql-tag";

export const GET_PRODUCTS = gql`
  query query {
    shop {
      name
      description
      products(first: 3) {
        edges {
          node {
            id
            title
            options {
              id
              name
              values
            }
            variants(first: 2) {
              edges {
                node {
                  id
                  title
                  selectedOptions {
                    name
                    value
                  }
                  image {
                    src
                  }
                  price
                }
              }
            }
            images(first: 2) {
              pageInfo {
                hasNextPage
                hasPreviousPage
              }
              edges {
                node {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`;
