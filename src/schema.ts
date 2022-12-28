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
    addProduct(product: ProductInput!): ProductPayload
    addBrand(brand: BrandsInput!): BrandPayload
    deleteProduct(id: ID!): Boolean
    deleteBrand(id: ID!): Boolean
    updateProduct(id: ID!, product: ProductInput!): ProductPayload
    updateBrand(id: ID!, brand: BrandsInput!): BrandPayload
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
  type ProductPayload {
    error: [Error]
    product: Product
  }

  type Error {
    errormessage: String
  }
  type BrandPayload {
    error: [Error]
    brand: Brand
  }
`;
