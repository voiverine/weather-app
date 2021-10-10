import axios from "axios";
import { apiUrl } from "./constants";

class AxiosApi {
  readonly axiosInstance;

  constructor(private baseURL: string) {
    this.axiosInstance = axios.create({
      baseURL,
    });
    // space to add interceptors
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

  post(path: string, data?: Record<string, string | number>) {
    return this.axiosInstance({
      method: "POST",
      url: path,
      data,
      headers: {
        "Content-Type": "application/json",
      },
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
  delete(path: string) {
    return this.axiosInstance({
      method: "DELETE",
      url: path,
      headers: {
        "Content-Type": "application/json",
      },
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

const axiosApi = new AxiosApi(apiUrl);
export { axiosApi };
