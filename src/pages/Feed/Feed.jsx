import React, { useState, useEffect } from "react";
import "weather-icons/css/weather-icons.css";
import "./Feed.css";
import * as weatherService from "../../utils/weatherService";
import WeatherCard from "../../components/WeatherCard/WeatherCard";
import { Card, Grid } from "semantic-ui-react";
import WeatherFeed from "../../components/WeatherFeed/WeatherFeed";

export default function Feed() {
  const [weatherCardData, setWeatherCardData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  async function getCards() {
    try {
      const weatherData = await weatherService.getAll();
      console.log(weatherData, "--- weatherData return from the getAll call");
      setLoading(false);
      setWeatherCardData(weatherData.cards);
    } catch (err) {
      setError(err.message);
      console.log(err, " this is the error");
    }
  }

  async function checkStatus() {
    if (loading === true && weatherCardData.length === 0) {
      console.log("--- checking for cards");
      getCards();
    } else if (loading === false && weatherCardData.length === 0) {
    }
  }

  useEffect(() => {
    if (weatherCardData.length === 0) {
      checkStatus();
    }
  }, [weatherCardData]);

  if (weatherCardData.length === 0) {
    return <>loading</>;
  }

  async function removeCard(cardId) {
    try {
      console.log(cardId, "--- cardId to remove");
      const data = await weatherService.removeCard(cardId);
      console.log(data, "this is data response from removeCard API");
      getCards();
    } catch (err) {
      console.log(err, "err in remove card");
    }
  }

  return (
    <Grid centered>
      <Grid.Row>
        <Grid.Column style={{ maxWidth: 1100 }}>
          <WeatherFeed
            removeCard={removeCard}
            weatherCardData={weatherCardData}
            loading={loading}
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
