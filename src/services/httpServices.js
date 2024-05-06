const { default: axios } = require("axios");

const Base_Url = "/api";

const api = axios.create({
  baseURL: Base_Url,
  withCredentials: true,
});
const http = {
  post: api.post,
  get: api.get,
  delete: api.delete,
  put: api.put,
};

export default http;
