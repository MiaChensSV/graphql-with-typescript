import { Products, Brands } from "../../data/database.js";
import console from "console";

interface ProductArgs {
id: null | string;
  product: {
    productname: string;
    price: string;
    brandId: string;
  }
}

interface Product {
  productname: string;
  price: string;
  brandId: string;
}

interface ProductPayload {
  error: {
    errormessage: string;
  }[],
  product: Product | null;
}
interface BrandArgs {
  id: string | null;
  brand:{
  name: string;
  description: string;
}}

interface Brand {
  name: string;
  description: string;
}
interface BrandPayload {
  error: {
    errormessage: string;
  }[],
  brand: Brand | null;
}

export const Mutation = {
  addProduct: async (_: any, {product}: ProductArgs): Promise<ProductPayload> => {
    const { productname, price, brandId } = product;
    if (productname === null || price === null) {
      return {
        error: [
          {
            errormessage: "please type in product name and price",
          },
        ],
        product: null,
      };
    } else {
      const newProduct = await Products.create({
        productname,
        price,
        brandId,
      });
      return {
        error: [],
        product: newProduct,
      };
    }
  },
  
  updateBrand: async (_:any, {id, brand}: BrandArgs): Promise<BrandPayload>  => {
    const { name, description } = brand;
    let brandToUpdate;
    if(id != null){
      brandToUpdate = await Brands.findById(id);
    } else {
      return {
        error: [
          {errormessage: 'Id cannot be empty'}
        ],
        brand: null
      }
    }
    if (!brandToUpdate){
      return {
        error: [
          {
            errormessage: "not find brand",
          },
        ],
        brand: null
      };
    }
    const brandNewValue = {
      id,
      name,
      description
    };
    const updatedBrand = await Brands.update(brandNewValue);
    return {
      error: [],
      brand: {...updatedBrand},
    };
  },

  updateProduct: async (_:any, {id, product}: ProductArgs): Promise<ProductPayload>  => {
    const { productname, price, brandId } = product;
    let productToUpdate;
    if(id != null){
      productToUpdate = await Products.findById(id);
    } else {
      return {
        error: [
          {errormessage: 'Id cannot be empty'}
        ],
        product: null
      }
    }
    if (!productToUpdate){
      return {
        error: [
          {
            errormessage: "not find product",
          },
        ],
        product: null
      };
    }
    const productNewValue = {
      id,
      productname,
      price,
      brandId
    };
    const updatedProduct = await Products.update(productNewValue);
    return {
      error: [],
      product: updatedProduct,
    };
  },
  
  deleteProduct: async (_: any, { id }: { id: string }) => {
    const product = await Products.findById(id);
    await Products.delete(id);
    return true;
  },
  addBrand: async (_: any, {brand}: BrandArgs): Promise<BrandPayload> => {
    const { name, description } = brand;
    if (name === null || description === null) {
      return {
        error: [
          {
            errormessage:
              "you did not type in information of brand name and description",
          },
        ],
        brand: null,
      };
    }
    const newBrand = await Brands.create({
      name,
      description,
    });
    return {
      error: [],
      brand: newBrand,
    };
  },
  deleteBrand: async (_: any, { id }: { id: string }) => {
    const product = await Brands.findById(id);
    await Brands.delete(id);
    return true;
  },
};
