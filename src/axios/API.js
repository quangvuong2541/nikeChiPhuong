import axios from "axios";
import * as URL from "./URL";

export default function API(endPoint, method, body, token) {
  return axios({
    method: method,
    url: `${URL.API_NIKE}/${endPoint}`,
    data: body,
    headers: { Authorization: `Bearer ${token}` },
  });
}
