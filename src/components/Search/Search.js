import React, { useState } from "react";

export default function Search(query) {
  // const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  console.log(weather, "before fetch");
  console.log(query, "query before fetch");

  const api = {
    KEY: process.env.REACT_APP_API_KEY,
    BASE_URL: "https://api.openweathermap.org/data/2.5/",
  };

  console.log(api);

  console.log("search called");
  fetch(`${api.BASE_URL}weather?q=${query}&units=metric&APPID=${api.KEY}`)
    .then((res) => res.json())
    .then((result) => setWeather(result));
  console.log(weather);
}
