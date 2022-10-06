import axios from "axios";

export const getRequest = async (url) => {
  try {
    const response = await axios.get(url);

    //Get request will return only 200 for success.
    const result = response.status === 200 ? response.data : null;
    return result;
  } catch (err) {
    return null;
  }
};

export const postRequest = async (url, payLoad) => {
  try {
    const response = await axios.post(url, payLoad);

    //Post request will return either 200 or 201 for success.
    const {status, data} = response;
    const result =
      status === 200 || status === 201 ? data : null;
    return result;
  } catch (err) {
    return null;
  }
};
