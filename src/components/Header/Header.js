import React from "react";

export default function Header({ onToggleMenu }) {

  return (
    <div class="ui top inverted attached menu">
      <span class="item link blue" onClick={onToggleMenu}>
        Menu
      </span>
    </div>
  );
}
