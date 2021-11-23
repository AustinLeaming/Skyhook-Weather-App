import React from "react";
import * as weatherService from "../../utils/weatherService";
import {
  Grid,
  Card,
  Loader,
  Dimmer,
  Segment,
  Image,
  Button,
  Table,
  Header,
} from "semantic-ui-react";

export default function SearchCard({ data }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    const weatherLocation = data.name;

    weatherService.addWeatherDataToUser(weatherLocation);
  };
  let icon = "wi wi-owm-" + data.weather[0].id;

  return (
    <>
      <Grid>
        <Grid.Row id="card">
          <Grid.Column width={5}>
            <Card>
              <Card.Content>
                <Card.Header>
                  <i className={icon} />
                  <br />
                  {data.name} {data.main.temp}°
                </Card.Header>
                <Card.Meta>Feels like: {data.main.feels_like}°</Card.Meta>
                <Card.Meta></Card.Meta>
                <Table basic="very" celled collapsing>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>
                        <Header as="h4" image>
                          <Image className="wi wi-humidity">
                            <Header.Content>Humidity levels</Header.Content>
                          </Image>
                        </Header>
                      </Table.Cell>
                      <Table.Cell>{data.main.humidity}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>
                        <Header as="h4" image>
                          <Image className="wi wi-barometer">
                            <Header.Content>Pressure</Header.Content>
                          </Image>
                        </Header>
                      </Table.Cell>
                      <Table.Cell>{data.main.pressure}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>
                        <Header as="h4" image>
                          <Image className="wi wi-small-craft-advisory">
                            <Header.Content>Wind</Header.Content>
                          </Image>
                        </Header>
                      </Table.Cell>
                      <Table.Cell>
                        Degree: {data.wind.deg}&deg;
                        <br />
                        Speed: {data.wind.speed} mph
                      </Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </Card.Content>
              <Card.Content>
                <Button onClick={handleSubmit}>Add to home</Button>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column width={11}></Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
}
