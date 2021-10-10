import axios from "axios";
import { apiUrl, apiKey, units } from "./constants";

class AxiosApi {
  readonly axiosInstance;

  constructor(private baseURL: string, private apiKey: string) {
    this.axiosInstance = axios.create({
      baseURL,
    });
    this.axiosInstance.interceptors.request.use((config) => {
      config.params = { ...config.params, APPID: apiKey, units };
      return config;
    });
  }

  get(path: string, params?: Record<string, string | number>) {
    return this.axiosInstance({
      method: "GET",
      url: path,
      params,
    })
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        // TODO serve the errors
        console.log(err);
        throw err;
      });
  }
}

const axiosApi = new AxiosApi(apiUrl, apiKey);
export { axiosApi };
