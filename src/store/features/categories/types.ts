export interface ICategory {
  id: string;
  categoryName: string;
  createdAt: string;
  updatedAt: string;
}
export interface IApiResponse {
  success: boolean;
  message: string;
  data: ICategory[];
}
