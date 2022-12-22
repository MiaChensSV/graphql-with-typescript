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
      return {
        error: [],
        product: await Products.create({
          productname,
          price,
          brandId,
        }),
      };
    }
  },
  deleteProduct: async (_: any, { id }: { id: string }) => {
    const product = await Products.findById(id);
    await Products.delete(id);
    return true;
  },
  addBrand: async (_: any, brand: BrandArgs) => {
    const { name, description } = brand;
    const newBrand = await Brands.create({
      name,
      description,
    });
    return newBrand;
  },
  deleteBrand: async (_: any, { id }: { id: string }) => {
    const product = await Brands.findById(id);
    await Brands.delete(id);
    return true;
  },
};
