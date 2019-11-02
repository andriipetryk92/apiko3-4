import React from "react";
import T from "prop-types";

export const Seasons = ({ name, toSeason, season_number }) => {
  return <li onClick={() => toSeason(season_number)}>{name}</li>;
};

Seasons.propTypes = {
  name: T.string.isRequired,
  toSeason: T.func,
  episode_number: T.number
};
