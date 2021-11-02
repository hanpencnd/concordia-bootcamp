import axios from "axios";

const axiosInstance = axios.create();

export const GET = "get";

const request = async (method, endpoint, body) => {
  const response = await axiosInstance[method](endpoint, body);

  return response.data;
};

export default request;
