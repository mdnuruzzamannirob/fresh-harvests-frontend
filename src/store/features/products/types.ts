export interface IProduct {
  id: string;
  productName: string;
  description: string;
  price: number;
  stock: number;
  images: string[];
  categoryId: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface IApiResponse {
  success: boolean;
  message: string;
  data: IProduct[];
}
export interface ISingleApiResponse {
  success: boolean;
  message: string;
  data: IProduct;
}
