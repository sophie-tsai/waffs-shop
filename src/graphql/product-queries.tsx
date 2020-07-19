import gql from "graphql-tag";

export const GET_PRODUCTS = gql`
  query products {
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
                    altText
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

export const GET_PRODUCT = gql`
  query product($id: ID!) {
    node(id: $id) {
      ... on Product {
        title
        description
        images(first: 2) {
          edges {
            node {
              id
              originalSrc
              altText
            }
          }
        }
        variants(first: 2) {
          edges {
            node {
              id
              image {
                id
                originalSrc
              }
              title
              availableForSale
              price
            }
          }
        }
      }
    }
  }
`;
