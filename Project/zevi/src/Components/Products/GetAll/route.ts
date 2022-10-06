import { getRequest } from "../../../Services/network/index";

export const getAllData = async () => {
  const URL = "https://fakestoreapi.com/products";
  const response = getRequest(URL);
  return response === null ? [] : response

}