import { connect } from "mongoose";
import tokenService from "./tokenService";

const BASE_URL = "/api/cards";

export async function getWeatherData(query) {
  console.log(query, "<- getWeatherDAta");
  try {
    return fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        query +
        "&units=imperial&APPID=" +
        process.env.REACT_APP_API_KEY
    ).then((res) => res.json());
    // .then((result) => setData(result));
  } catch (err) {
    console.log(err);
  }
}

export function addWeatherDataToUser(city) {
  console.log(city, " in weather service ");
  return fetch(`${BASE_URL}`, {
    // I receive an empty object in req.body when this function gets called
    method: "POST",
    headers: {
      Authorization: "Bearer " + tokenService.getToken(),
      "Content-Type": "application/json",
    },

    body: JSON.stringify({ city }),
  }).then((res) => {
    if (res.ok) return res.json();
    throw new Error("Bad city");
  });
}

export function getAll() {
  // console.log("getAll function hit");
  return fetch(BASE_URL, {
    headers: {
      Authorization: "Bearer " + tokenService.getToken(),
    },
  }).then((res) => {
    // Valid login if we have a status of 2xx (res.ok)
    if (res.ok) return res.json();
    throw new Error("bad Credentials");
  });
}
