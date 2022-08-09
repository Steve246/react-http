import { JsonPlaceHolderServices } from "./JsonPlaceHolderServices";

export const serviceFactory = () => {
  return {
    jsonPlaceHolderServices: JsonPlaceHolderServices(),
  };
};
