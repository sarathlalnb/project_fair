import axios from "axios";
import baseURL from "./baseUrls";

const commonApi = async (httpMethod, endpoint, requestBody, requestHeader) => {
  const requestConfig = {
    method: httpMethod,
    url: baseURL + endpoint,//localhist:300/addproject
    data: requestBody,
    headers: requestHeader
      ? requestHeader
      : { "Content-Type": "application/json" },
  };
  return await axios(requestConfig)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export default commonApi;
