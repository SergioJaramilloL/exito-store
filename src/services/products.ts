import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query GetProducts {
    products {
      id
      image
      title
      price
    }
  }
`;

export const GET_PRODUCT_BY_ID = gql`
	query GetProductById($id: String!) {
		product(id: $id) {
      id
      image
      title
      price
      description
      category
      rating {
        rate
      }
		}
	}
`;