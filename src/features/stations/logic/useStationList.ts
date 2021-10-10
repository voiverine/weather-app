import { useRemoveStation } from "./useRemoveStation";
import { useAPIQuery } from "../../../hooks/useAPIQuery";
import { apiPaths } from "../../../app/constants";
import { Station } from "./types";

export const useStationList = () => {
  const { isError, isLoading, data } = useAPIQuery<Station[]>([
    apiPaths.stations,
  ]);

  const { removeStation, disabled } = useRemoveStation();
  return { isError, isLoading, data, removeStation, disabled };
};
