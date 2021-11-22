import React, { useState, useEffect } from "react";
import "weather-icons/css/weather-icons.css";
import "./Feed.css";
import * as weatherService from "../../utils/weatherService";
import WeatherCard from "../../components/WeatherCard/WeatherCard";
import { Card, Loader, Grid, Segment, Image, Icon } from "semantic-ui-react";

export default function Feed() {
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

  useEffect(() => {
    if (weatherCardData.length === 0) {
      getCards();
    }
  }, [weatherCardData]);

  if (weatherCardData.length === 0) {
    return <>loading</>;
  }

  async function removeCard(cardId) {
    try {
      const data = await weatherService.removeCard(cardId);
      console.log(data, "this is data response from removeCard API");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Grid centered>
      <Grid.Row>
        <Grid.Column style={{ maxWidth: 1100 }}>
          <Card.Group itemsPerRow={3} stackable>
            {weatherCardData.map(({ location }, i) => {
              return (
                <WeatherCard
                  weatherCardData={weatherCardData[i]._id}
                  location={location}
                  key={location}
                  removeCard={removeCard}
                />
              );
            })}
          </Card.Group>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
