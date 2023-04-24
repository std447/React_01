import { getRequest } from "../../Services/http/http.service";
const BASEURL = `https://api.github.com/users/`
export const userFollower = async (user) => {
  const URL = `${BASEURL}${user}/followers`;
  const result = await getRequest(URL);
  return result;
}