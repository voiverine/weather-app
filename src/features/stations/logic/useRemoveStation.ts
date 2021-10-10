import { useRef } from "react";
import { useMutation, useQueryClient } from "react-query";
import { apiPaths } from "../../../app/constants";
import { axiosApi } from "../../../app/axios";
import { showToast } from "../../../app/showToast";
import { Station } from "./types";

export const useRemoveStation = () => {
  const queryClient = useQueryClient();

  const disabled = useRef<Set<string>>(new Set());
  const toggleDisabled = (id: string) => {
    if (disabled.current.has(id)) {
      disabled.current.delete(id);
    } else {
      disabled.current.add(id);
    }
  };

  const { mutate } = useMutation(
    (id: string) => {
      toggleDisabled(id);
      return axiosApi.delete(`${apiPaths.stations}/${id}`);
    },
    {
      onError: (error, id) => {
        toggleDisabled(id);
        showToast((error as any) || "Couldn't delete your station.");
      },
      onSuccess: (data, id) => {
        showToast("Your station has been deleted.", "success");
        toggleDisabled(id);
        queryClient.setQueryData(
          [apiPaths.stations],
          (input: Station[] | undefined): Station[] => {
            return Array.isArray(input)
              ? input.filter((el) => el.id !== id)
              : [];
          }
        );
      },
    }
  );

  return { removeStation: mutate, disabled };
};
