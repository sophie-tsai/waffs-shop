import gql from "graphql-tag";

export const GET_DISCOUNTS = gql`
  query {
    codeDiscountNodes(first: 10) {
      edges {
        node {
          id
          codeDiscount {
            __typename
            ... on DiscountCodeBasic {
              status
              title
              customerGets {
                items {
                  __typename
                }
                value {
                  __typename
                }
              }
              endsAt
              shortSummary
              summary
              minimumRequirement {
                __typename
                ... on DiscountMinimumQuantity {
                  greaterThanOrEqualToQuantity
                }
                ... on DiscountMinimumSubtotal {
                  greaterThanOrEqualToSubtotal {
                    amount
                  }
                }
              }
            }
            ... on DiscountCodeBxgy {
              status
              title
              customerBuys {
                items {
                  __typename
                }
                value {
                  __typename
                }
              }
              customerGets {
                items {
                  __typename
                }
                value {
                  __typename
                }
              }
              summary
              endsAt
            }
            ... on DiscountCodeFreeShipping {
              status
              title
              shortSummary
              endsAt
              minimumRequirement {
                __typename
                ... on DiscountMinimumQuantity {
                  greaterThanOrEqualToQuantity
                }
                ... on DiscountMinimumSubtotal {
                  greaterThanOrEqualToSubtotal {
                    amount
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
