import { connect } from "mongoose";
import tokenService from "./tokenService";

const BASE_URL = "/api/cards";

export async function getWeatherData(query) {
  console.log(query, "--- getting weather data on this city");
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
  console.log(city, "--- adding city to the user model");
  return fetch(`${BASE_URL}`, {
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

export function removeCard(id) {
  return fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: "Bearer " + tokenService.getToken(),
    },
  }).then((res) => {
    if (res.ok) return res.json();
    throw new Error("Login to remove this card");
  });
}
