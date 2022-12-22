import { Brands } from "../../data/database.js"

interface productParent {
    brandId:string;
}
export const Product = {
    brand: async (parent:productParent)=>{
        return await Brands.findById(parent.brandId)
    }
}