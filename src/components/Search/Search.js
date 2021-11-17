import React, { useState } from "react";

export default function Search() {
  const api = {
    KEY: process.env.API_KEY,
    BASE_URL: "https://api.openweathermap.org/data/2.5/",
  };

  const [query, setQuery] = useState({});
}
