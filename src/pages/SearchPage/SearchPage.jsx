import React from "react";
import "./SearchPage.css";
import "weather-icons/css/weather-icons.css";
import SearchCard from "../../components/SearchCard/SearchCard";
import { Card, Grid } from "semantic-ui-react";
import SearchFeed from "../../components/SearchFeed/SearchFeed";

export default function SearchPage({ data }) {
  return (
    <Grid centered>
      <Grid.Row>
        <Grid.Column style={{ maxWidth: 1100 }}>
          <SearchFeed data={data} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
