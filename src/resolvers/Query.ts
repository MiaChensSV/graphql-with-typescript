import { Brands, Products } from "../../data/database.js";

export const Query = {
  products: async () => {
    return await Products.findAll();
  
  },
  brands: async () => {
    return await Brands.findAll();
  },
  product: async (_: any, { id }: { id: string }) => {
    return await Products.findById(id);
  },
  brand: async (_: any, { id }: { id: string }) => {
    return await Brands.findById(id);
  },
};


