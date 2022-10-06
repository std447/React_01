import axios from "axios";

export const getRequest = async (url:string) => {
  try {
    const response = await axios.get(url);
    const result = response.status === 200 ? response.data : null;
    return result;
  } catch (e) {
    return null;
  }
};

export const postRequest = async (url:string, payLoad:any) => {
  try {
    const response = await axios.post(url, payLoad);
    const { status, data } = response;

    const result = status === 200 || status === 201 ? data : null;
    return result;
  } catch (e) {
    return null;
  }
};
