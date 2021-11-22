import React, { useState } from "react";
import {
  Card,
  Loader,
  Dimmer,
  Segment,
  Image,
  Button,
  Table,
  Header,
} from "semantic-ui-react";
import "weather-icons/css/weather-icons.css";
import * as weatherService from "../../utils/weatherService";
import "./WeatherCard";

export default function WeatherCard({ location, removeCard, weatherCardData }) {
  const [loading, setLoading] = useState(true);
  const [forecast, setForecast] = useState({});
  const [cityName, setCityName] = useState("");
  const [temp, setTemp] = useState("");
  const [feelsLike, setFeelsLike] = useState("");
  const [humidity, setHumidity] = useState("");
  const [pressure, setPressure] = useState("");
  const [windDeg, setWindDeg] = useState("");
  const [windSpeed, setWindSpeed] = useState("");
  const [icon, setIcon] = useState("");

  async function queryApi(city) {
    console.log(city, "this is city");
    try {
      const data = await weatherService.getWeatherData(city);
      setLoading(false);
      console.log(data, "this is data to be filled in to the card");
      setCityName(data.name);
      setTemp(data.main.temp);
      setFeelsLike(data.main.feels_like);
      setHumidity(data.main.humidity);
      setPressure(data.main.pressure);
      setWindDeg(data.wind.deg);
      setWindSpeed(data.wind.speed);
      setIcon("wi wi-owm-" + data.weather[0].id);
    } catch (err) {
      console.log(err);
    }
  }

  if (loading === true) {
    queryApi(location);
  }

  return (
    <Card raised>
      {loading ? (
        <Segment>
          <Dimmer active inverted>
            <Loader size="small">Loading</Loader>
          </Dimmer>
          <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
        </Segment>
      ) : null}
      <Card.Content>
        <Card.Header>
          <i className={icon} />
          <br />
          {cityName} {temp}°
        </Card.Header>
        <Card.Meta>Feels like: {feelsLike}°</Card.Meta>
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
              <Table.Cell>{humidity}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Header as="h4" image>
                  <Image className="wi wi-barometer">
                    <Header.Content>Pressure</Header.Content>
                  </Image>
                </Header>
              </Table.Cell>
              <Table.Cell>{pressure}</Table.Cell>
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
                Degree: {windDeg}&deg;
                <br />
                Speed: {windSpeed} mph
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Card.Content>
      <Card.Content extra>
        {/* do a link to the details of this card */}
        <Button inverted color="blue">
          Details
        </Button>
        {/* delete this card */}
        <Button inverted color="red" onClick={removeCard(weatherCardData)}>
          Delete
        </Button>
      </Card.Content>
    </Card>
  );
}
