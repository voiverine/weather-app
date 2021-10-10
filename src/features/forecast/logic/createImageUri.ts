import { apiImageSuffix, apiImageUrl } from "../../../app/constants";

type CreateImageUri = (iconCode: string) => string;

export const createImageUri: CreateImageUri = (iconCode) =>
  apiImageUrl + iconCode + apiImageSuffix;
