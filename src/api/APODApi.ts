import axios from "axios";
import { APODQueryParameters } from "./types";

const API_KEY = process.env.REACT_APP_NASA_API_KEY;
const API_URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;

const queryString = ({ startDate, endDate }: APODQueryParameters) => {
  const queryURL = new URL(API_URL);

  if (startDate && endDate) {
    queryURL.searchParams.append("start_date", startDate);
    queryURL.searchParams.append("end_date", endDate);
  } else {
    queryURL.searchParams.append("count", "8");
  }

  return queryURL.href;
};

const getPhotos = async (queryParams: APODQueryParameters) => {
  const queryURL = queryString(queryParams);

  const res = await axios.get(queryURL);

  if (res.statusText === "OK") {
    return res.data;
  } else {
    throw new Error(res.statusText);
  }
};

export { getPhotos };
