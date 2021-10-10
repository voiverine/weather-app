import { useEffect } from "react";
import { useQuery } from "react-query";
import { UseQueryOptions, UseQueryResult } from "react-query/types/react/types";
import { axiosApi } from "../app/axios";
import { showToast } from "../app/showToast";

type Url = [path: string, params?: Record<string, string | number>];
interface Options extends UseQueryOptions {
  showToast?: boolean;
  toastMessage?: string;
  method?: "GET" | "DELETE";
}
const defaultOptions = { showToast: true, method: "GET" };

type UseAPIQuery = <TData = unknown>(
  url: Url,
  options?: Options
) => UseQueryResult<TData>;

const useAPIQuery: UseAPIQuery = <TData extends unknown>(
  url: Url,
  options: Options = {}
) => {
  const mergedOptions: Record<string, any> = { ...defaultOptions, ...options };

  const result = useQuery<TData, Error>(
    url,
    () => {
      if (options.method === "DELETE") {
        return axiosApi.delete(url[0]);
      }
      return axiosApi.get(url[0], url[1]);
    },
    mergedOptions
  );

  // optionally, display a toast with error
  const { error } = result;
  useEffect(() => {
    if (mergedOptions.showToast && error) {
      showToast(error);
    }
  }, [error, mergedOptions.toastMessage, mergedOptions.showToast]);

  return result;
};

export { useAPIQuery };
