# Graphql-use-typescript Project
- Install all necessary dependencies by running:
 npm install
- To start local server by running in Terminal:
 npm run dev

# How to Query
- Query all products
``` 
query Products {
  products {
    id
    price
    productname
    brand {
      name
    }
  }
}
```
- Query all brands
 ```
query Brands {
  brands {
    id
    name
    description
    products {
      productname
    }
  }
}
```
- Query one brand with ID
  - brandId is a must to make the query
```
query Brand($brandId: ID) {
  brand(id: $brandId) {
    id
    name
    description
  }
}
```
- Query one product with ID
  - productId is a must to make the query
```
query Product($productId: ID) {
  product(id: $productId) {
    price
    productname
    brand {
      name
    }
  }
}
```
# How to make mutation
- Create a product
   - price and productname in ProductInput is a must.
```
mutation Mutation($product: ProductInput!) {
  addProduct(product: $product) {
    product {
      price
      productname
      brand {
        name
      }
    }
  }
}
```
- Create a brand
  - name and description is a must in BrandsInput
```
mutation AddBrand($brand: BrandsInput!) {
  addBrand(brand: $brand) {
    brand {
      name
      description
    }
  }
}
```
- Delete a brand
  - deleteBrandId is a must
```
mutation DeleteBrand($deleteBrandId: ID!) {
  deleteBrand(id: $deleteBrandId)
}
```
- Delete a product
  - deleteProductId is a must
mutation DeleteProduct($deleteProductId: ID!) {
  deleteProduct(id: $deleteProductId)
}
- Update a product
  - updateProductId, price, productname is a must
```
mutation UpdateProduct($updateProductId: ID!, $product: ProductInput!) {
  updateProduct(id: $updateProductId, product: $product) {
    product {
      price
      productname
    }
  }
}
```
- Update a brand
  - updateBrandId,name, description is a must
```
mutation UpdateBrand($updateBrandId: ID!, $brand: BrandsInput!) {
  updateBrand(id: $updateBrandId, brand: $brand) {
    brand {
      name
      description
    }
  }
}
``` 
