import React from "react";
import { Card, Loader, Grid, Segment, Image, Icon } from "semantic-ui-react";
import "weather-icons/css/weather-icons.css";
import * as weatherService from "../../utils/weatherService";

export default function WeatherCard({ location }) {
  async function queryApi(i) {
    try {
      const forecast = await weatherService.getWeatherData(i);

      console.log(forecast, "this is forecast");
    } catch (err) {
      console.log(err);
    }
  }

  queryApi(location);

  return (
    <>
      <div class="ui grid hidden section divider">
        <h1>{location}</h1>
      </div>
    </>
  );
}

//   <div class="ui grid hidden section divider">
//     <div class="two wide column"></div>
//     <div class="four wide column">
//       <div class="ui card">
//         <div id="card-content" class="header center aligned">
//           {/* size from the weather icons is declared by font-size in css sheet */}
//           <i class="wi wi-day-sunny"></i>
//           <br />
//           {/* the center aligned is messing up the icon and the text being in the center. To fix this, I removed the margins from the text and left the icon alignment alone. */}
//           <span id="card-location" class="weather-text"></span>
//           <br />
//           <span id="card-temp" class="weather-text">
//             34
//           </span>
//           <br />
//           <span class="weather-text">54/75</span>
//           <br />
//           <span id="card-desc" class="weather-text">
//             Slight overcast
//           </span>
//         </div>
//         <div class="content">
//           <div class="meta center aligned">
//             <span id="card-date">Nov. 16</span>
//           </div>
//           <div class="description center aligned">5-Day Forecast</div>
//           <br />
//           <div class="center algined">
//             <div class="center aligned">Tuesday: 50</div>
//             <br />
//             <div class="center aligned">Tuesday: 50</div>
//             <br />
//             <div class="center aligned">Tuesday: 50</div>
//             <br />
//             <div class="center aligned">Tuesday: 50</div>
//             <br />
//             <div class="center aligned">Tuesday: 50</div>
//             <br />
//           </div>
//         </div>
//         <div class="extra content">
//           <button>Details</button>
//           <button>Remove</button>
//         </div>
//       </div>
//     </div>
//     <div class="four wide column">
//       <div class="ui card">
//         <div class="image center aligned">
//           {/* size from the weather icons is declared by font-size in css sheet */}
//           <i class="wi wi-day-sunny fw"></i>
//         </div>
//         <div class="content">
//           <div class="meta">
//             <span class="date">Joined in 2013</span>
//           </div>
//           <div class="description">
//             Kristy is an art director living in New York.
//           </div>
//         </div>
//         <div class="extra content">
//           <a>
//             <i class="user icon"></i>
//             22 Friends
//           </a>
//         </div>
//       </div>
//     </div>
//     <div class="four wide column">
//       <div class="ui card">
//         <div class="image center aligned">
//           {/* size from the weather icons is declared by font-size in css sheet */}
//           <i class="wi wi-day-sunny fw"></i>
//         </div>
//         <div class="content">
//           <div class="meta">
//             <span class="date">Joined in 2013</span>
//           </div>
//           <div class="description">
//             Kristy is an art director living in New York.
//           </div>
//         </div>
//         <div class="extra content">
//           <a>
//             <i class="user icon"></i>
//             22 Friends
//           </a>
//         </div>
//       </div>
//     </div>
//     <div class="two wide column"></div>
//   </div>
