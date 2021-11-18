import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./SearchPage.css";

export default function SearchPage({ data }) {
  //   console.log(data, "search page");

  let dateTime = Date(data.sys.sunrise);

  console.log(dateTime);

  return (
    <>
      <div class="ui grid hidden section divider">
        <div class="two wide column"></div>
        <div id="detail" class="two wide column">
          <h1>{data.name}</h1>
          <br />
          <h1>{data.main.temp}&deg;</h1>
          <p>Feels like: {data.main.feels_like}&deg;</p>
        </div>
        <div id="detail" class="two wide column">
          <h1></h1>
        </div>
        <div id="detail" class="six wide column"></div>
        <div id="detail" class="two wide column"></div>
        <div class="two wide column"></div>
      </div>
    </>
  );
}
