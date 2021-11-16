import React from "react";

export default function Home() {
  return (
    <>
      <div class="ui card">
        <div class="image">
          <i className="wi wi-day-sunny"></i>
        </div>
        <div class="content">
          <a class="header">Kristy</a>
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
    </>
  );
}
