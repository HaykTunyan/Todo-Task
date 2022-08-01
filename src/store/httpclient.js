import axios from "axios";
import store from "./configureStore";

const { REACT_APP_DEV_API } = process.env;

const client = () => {
  const service = axios.create({ baseURL: REACT_APP_DEV_API });
  service.interceptors.response.use(
    (response) => response,
    (error) => {
      const response = error.response;
      return Promise.reject(response);
    }
  );
  return service;
};

export default client;
