import { getRequest } from "../../Services/http/http.service.js";
const BASEURL = `https://api.github.com/users/`
export const searchUserDetails = async (user) => {
  const URL = `${BASEURL}${user}`;
  const result = await getRequest(URL);
  return result;
}

export const userRepo = async (user) => {
  const URL = `${BASEURL}${user}/repos`;
  const result = await getRequest(URL);
  return result;
}

