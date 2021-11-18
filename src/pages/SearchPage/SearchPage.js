import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./SearchPage.css";
import "weather-icons/css/weather-icons.css";

export default function SearchPage({ data }) {
  let foo = "wi wi-owm-" + data.weather[0].id;

  console.log(foo);

  return (
    <>
      <div class="ui grid hidden section divider">
        <div class="one wide column"></div>
        <div id="detail" class="two wide column">
          <i class={foo}></i>
          <h1>{data.name}</h1>
          <br />
          <h1>{data.main.temp}&deg;</h1>
          <p>Feels like: {data.main.feels_like}&deg;</p>
          <p>{data.weather[0].description}</p>
        </div>
        <div id="detail" class="two wide column">
          <h1>Current Time:</h1>
          <p>I haven't figured this out...</p>
          <h3>Current Date:</h3>
          <p>this either...</p>
        </div>
        <div id="detail" class="six wide column">
          <h1>Weather Report</h1>
          <p>Lorem ipsum babyyy</p>
        </div>
        <div id="detail" class="two wide column">
          <table class="ui celled table">
            <tbody>
              <tr>
                <i class="wi wi-humidity"></i>
                <p>Humidity</p>
                <p>{data.main.humidity}</p>
              </tr>
              <tr>
                <i class="wi wi-barometer"></i>
                <p>Pressure</p>
                <p>{data.main.pressure}</p>
                <p>technically wrong, I don't know how to calculate pressure</p>
              </tr>
              <tr>
                <i class="wi wi-small-craft-advisory"></i>
                <p>Wind</p>
                <p>{data.wind.deg}&deg;</p>
                <p>{data.wind.speed} mph</p>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="one wide column"></div>
      </div>
    </>
  );
}
