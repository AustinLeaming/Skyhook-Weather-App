import React from "react";
import "./SearchPage.css";
import "weather-icons/css/weather-icons.css";
import SearchCard from "../../components/SearchCard/SearchCard";

export default function SearchPage({ data }) {
  return <SearchCard data={data} />;
}
