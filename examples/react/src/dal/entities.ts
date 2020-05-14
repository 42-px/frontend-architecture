/**
 * Data types
 */
export type Image = {
  url: string;
}

export type Product = {
  id: string;
  name: string;
  price: number;
  about: string;
  image: Image;
  currency: {
    name: string;
    symbol: string;
  };
}
