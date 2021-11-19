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
    // headers: {
    //   // Authorization: "Bearer " + tokenService.getToken(),
    //   Content-Type: application/json,
    // },

    headers: new Headers({ "Content-Type": "application/json" }),

    // maybe its the content-type thats the problem?
    // "Content-Type": "application/json",

    // city is good before this fetch, but inside of here it gets lost

    // something in here is causing the city to not get passed along

    body: JSON.stringify(city),
  }).then((res) => {
    if (res.ok) return res.json;
    throw new Error("Bad city");
  });
}
