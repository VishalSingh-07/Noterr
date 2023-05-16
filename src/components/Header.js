import React from "react";
import Date from "./date";
function Header() {
  return (
    <div>
      <header>
        <h1>
          <i className="fas fa-lightbulb icons"></i>Keeper App
        </h1>
        <Date />
      </header>
    </div>
  );
}

export default Header;
