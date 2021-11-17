import React, { useState } from "react";
import { Icon } from "semantic-ui-react";
import "weather-icons/css/weather-icons.css";
import "./Home.css";

export default function Home() {
  const KEY = process.env.API_KEY;
  const [weather, setWeather] = useState({});

  async function getWeather() {
    const api_call = await fetch(
      `api.openweathermap.org/data/2.5/weather?q=London&appid=${KEY}`
    );
    const response = await api_call.json();

    console.log(response);
    setWeather(response);
  }

  // load the users cards on this screen

  return (
    <>
      <div class="ui grid hidden section divider">
        <div class="two wide column"></div>
        <div class="four wide column">
          <div class="ui card">
            <div id="card-content" class="header center aligned">
              {/* size from the weather icons is declared by font-size in css sheet */}
              <i class="wi wi-day-sunny"></i>
              <br />
              {/* the center aligned is messing up the icon and the text being in the center. To fix this, I removed the margins from the text and left the icon alignment alone. */}
              <span id="card-location" class="weather-text">
                Denver, CO
              </span>
              <br />
              <span id="card-temp" class="weather-text">
                56
              </span>
              <br />
              <span class="weather-text">54/75</span>
              <br />
              <span id="card-desc" class="weather-text">
                Slight overcast
              </span>
            </div>
            <div class="content">
              <div class="meta center aligned">
                <span id="card-date">Nov. 16</span>
              </div>
              <div class="description center aligned">5-Day Forecast</div>
              <br />
              <div class="center algined">
                <div class="center aligned">Tuesday: 50</div>
                <br />
                <div class="center aligned">Tuesday: 50</div>
                <br />
                <div class="center aligned">Tuesday: 50</div>
                <br />
                <div class="center aligned">Tuesday: 50</div>
                <br />
                <div class="center aligned">Tuesday: 50</div>
                <br />
              </div>
            </div>
            <div class="extra content">
              <button>Details</button>
              <button>Remove</button>
            </div>
          </div>
        </div>
        <div class="four wide column">
          <div class="ui card">
            <div class="image center aligned">
              {/* size from the weather icons is declared by font-size in css sheet */}
              <i class="wi wi-day-sunny fw"></i>
            </div>
            <div class="content">
              <div class="meta">
                <span class="date">Joined in 2013</span>
              </div>
              <div class="description">
                Kristy is an art director living in New York.
              </div>
            </div>
            <div class="extra content">
              <a>
                <i class="user icon"></i>
                22 Friends
              </a>
            </div>
          </div>
        </div>
        <div class="four wide column">
          <div class="ui card">
            <div class="image center aligned">
              {/* size from the weather icons is declared by font-size in css sheet */}
              <i class="wi wi-day-sunny fw"></i>
            </div>
            <div class="content">
              <div class="meta">
                <span class="date">Joined in 2013</span>
              </div>
              <div class="description">
                Kristy is an art director living in New York.
              </div>
            </div>
            <div class="extra content">
              <a>
                <i class="user icon"></i>
                22 Friends
              </a>
            </div>
          </div>
        </div>
        <div class="two wide column"></div>
      </div>
    </>
  );
}
