import React from "react";
import T from "prop-types";

export const Header = ({ typeRated, typePopular }) => {
  return (
    <header>
      <div id="popular" onClick={typePopular}>
        Popular TV shows
      </div>
      <div id="ranted" onClick={typeRated}>
        Ranted TV shows
      </div>
    </header>
  );
};

Header.propTypes = {
  typePopular: T.func,
  typeRanted: T.func
};
