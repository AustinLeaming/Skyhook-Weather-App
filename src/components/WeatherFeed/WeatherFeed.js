import React from "react";
import WeatherCard from "../WeatherCard/WeatherCard";
import { Card } from "semantic-ui-react";

export default function WeatherFeed({ removeCard, weatherCardData }) {
  return (
    <Card.Group itemsPerRow={3} stackable>
      {weatherCardData.map(({ location }, i) => {
        return (
          <WeatherCard
            weatherCardDataId={weatherCardData[i]._id}
            location={location}
            removeCard={removeCard}
          />
        );
      })}
    </Card.Group>
  );
}
