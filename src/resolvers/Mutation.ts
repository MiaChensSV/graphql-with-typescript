import { Products, Brands } from "../../data/database.js";

interface ProductArgs {
  productname: string;
  price: string;
  brandId: string;
}

interface Product {
  productname: string;
  price: string;
  brandId: string;
}

interface ProductPayload {
  error: {
    errormessage: string;
  }[];
  product: Product | null;
}
interface BrandArgs {
  name: string;
  description: string;
}

interface Brand {
  name: string;
  description: string;
}
interface BrandPayload {
  error: {
    errormessage: string;
  }[];
  brand: Brand | null;
}

export const Mutation = {
  addProduct: async (_: any, product: ProductArgs): Promise<ProductPayload> => {
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
      console.log("111");
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
  deleteProduct: async (_: any, { id }: { id: string }) => {
    const product = await Products.findById(id);
    await Products.delete(id);
    return true;
  },
  addBrand: async (_: any, brand: BrandArgs): Promise<BrandPayload> => {
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
