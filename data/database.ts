import { Database, Entity } from "fakebase";

interface Brand extends Entity {
  id: string;
  name: string;
  description: string;
}

interface Product extends Entity {
  brandId: string;
  id: string;
  productname: string;
  price: string;
}
const db = new Database("./data/data");
export const Brands = db.table<Brand>("brands");
export const Products = db.table<Product>("products");
