import axios from 'axios';

export const getData = async (url) => {
 const response = await axios.get(url);
  return response.data;
}

