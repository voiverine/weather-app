import { useEffect } from "react";
import { useQuery } from "react-query";
import { UseQueryOptions } from "react-query/types/react/types";
import { toast } from "react-toastify";
import { axiosApi } from "../app/axios";

type Url = [path: string, params: Record<string, string | number>];
interface Options extends UseQueryOptions {
  showToast?: boolean;
  toastMessage?: string;
}
const defaultOptions = { showToast: true };

const useAPIQuery = (url: Url, options: Options = {}) => {
  const mergedOptions = { ...defaultOptions, ...options };

  const result = useQuery(
    url,
    () => axiosApi.get(url[0], url[1]),
    mergedOptions
  );

  // optionally, display a toast with error
  const { error } = result;
  useEffect(() => {
    if (mergedOptions.showToast && error) {
      const assertedError = error as Error;
      const defaultMessage =
        "message" in assertedError ? assertedError.message : "";
      const message = mergedOptions.toastMessage || defaultMessage;
      toast(message);
    }
  }, [error, mergedOptions.toastMessage, mergedOptions.showToast]);

  return result;
};

export { useAPIQuery };
