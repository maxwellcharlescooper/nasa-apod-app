import axios from "./api";
import { toApodResponse } from "../types/ConvertToTypes";

export const fetchApod = async () => {
  try {
    const state = await axios.get("/apod", {});
    return toApodResponse(state?.data);
  } catch (error) {
    console.error(error, "apod.ts");
  }
};
