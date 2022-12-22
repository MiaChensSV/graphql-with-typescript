import { Products } from "../../data/database.js";

interface brandParent {
  id: string;
}

export const Brand = {
  products: async (parent: brandParent) => {
    return await Products.findAll((product) => product.brandId === parent.id);
  },
};
