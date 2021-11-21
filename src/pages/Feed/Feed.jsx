import React, { useState, useEffect } from "react";
import "weather-icons/css/weather-icons.css";
import "./Feed.css";
import * as weatherService from "../../utils/weatherService";
import WeatherCard from "../../components/WeatherCard/WeatherCard";

export default function Feed() {
  const [weather, setWeather] = useState([]);
  const [weatherCardData, setWeatherCardData] = useState([]);
  const [error, setError] = useState("");

  async function getCards() {
    try {
      const weatherData = await weatherService.getAll();
      console.log(weatherData, "this is weatherData");
      setWeatherCardData(weatherData.cards);
    } catch (err) {
      setError(err.message);
      console.log(err, " this is the error");
    }
  }
  function getData() {
    console.log("get data called");
  }

  useEffect(() => {
    if (weatherCardData.length === 0) {
      getCards();
    }
  }, [weatherCardData]);

  if (weatherCardData.length === 0) {
    return <>loading</>;
  }

  return weatherCardData.map(({ location }, i) => (
    <WeatherCard location={location} key={i} />
  ));
}
