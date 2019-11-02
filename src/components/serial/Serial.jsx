import React, { Fragment } from "react";
import T from "prop-types";
import { Seasons } from "../seasons/Seasons";
export const Serial = ({
  number_of_seasons,
  number_of_episodes,
  original_name,
  overview,
  poster_path,
  seasons,
  toSeason
}) => {
  return (
    <Fragment>
      <ul id="serial">
        <li>1.Name: {original_name}</li>
        <li>2.Description:{overview}</li>
        <li>
          <img
            src={`https://image.tmdb.org/t/p/w500_and_h282_face${poster_path}`}
            aria-hidden
            alt={`Image ${original_name} is not available`}
          />
        </li>
        <li>4.Count of Seasons: {number_of_seasons}</li>
        <li>5.Count of Episodes: {number_of_episodes}</li>
        <li id="data">
          <p id="big_text">Seasons:</p>
          <ol>
            {seasons.map(season => (
              <Seasons key={season.id} {...season} toSeason={toSeason} />
            ))}
          </ol>
        </li>
      </ul>
    </Fragment>
  );
};

Serial.propTypes = {
  seasons: T.array.isRequired,
  original_name: T.string.isRequired,
  overview: T.string.isRequired,
  poster_path: T.string.isRequired,
  number_of_seasons: T.number.isRequired,
  number_of_episodes: T.number.isRequired,
  toSeason: T.func
};
