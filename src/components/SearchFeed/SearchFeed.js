import React from "react";
import SearchCard from "../SearchCard/SearchCard";
import { Card, Grid } from "semantic-ui-react";

export default function WeatherFeed({ data }) {
  return (
    <Grid centered>
      <Grid.Row>
        <Grid.Column style={{ maxWidth: 1100 }}>
          <SearchCard data={data} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
