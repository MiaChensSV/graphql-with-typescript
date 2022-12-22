import { gql } from "apollo-server-express";

export const typeDefs = gql`
type Query {
    brands: [Brand]
    brand(id: ID): Brand
    products: [Product]
    product(id: ID): Product
  }
  type Product {
    id: ID!
    productname: String
    price: String
    brand: Brand
  }

  type Brand {
    id: ID
    name: String
    description: String
    products: [Product]
  }

  type Mutation {
    addProduct(product: ProductInput): Product
    addBrand(brand: BrandsInput): Brand
    deleteProduct(id: ID): Boolean
    deleteBrand(id: ID): Boolean
    updateProduct(id: ID, product: ProductInput): Product
    updateBrand(id: ID, brand: BrandsInput): Brand
  }
  input ProductInput {
    productname: String
    price: String
    brandId: String
  }
  input BrandsInput {
    name: String
    description: String
  }
`;
