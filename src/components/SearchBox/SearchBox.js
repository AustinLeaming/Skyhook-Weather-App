import React, { useState } from "react";

export default function Search(query) {
  const [weather, setWeather] = useState({});

  const api = {
    KEY: process.env.REACT_APP_API_KEY,
    BASE_URL: "https://api.openweathermap.org/data/2.5/",
  };

  fetch(`${api.BASE_URL}weather?q=${query}&units=metric&APPID=${api.KEY}`)
    .then((res) => res.json())
    .then((result) => setWeather(result));
  console.log(weather, "weather from searchBox.js");
}
