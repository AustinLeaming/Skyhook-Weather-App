import tokenService from "./tokenService";

const BASE_URL = "/search";

export async function getWeatherData(query) {
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
  return fetch(`${BASE_URL}`, {
    method: "POST",
    body: city,
    headers: {
      Authorization: "Bearer " + tokenService.getToken(),
    },
  }).then((res) => {
    if (res.ok) return res.json;
  });
}
