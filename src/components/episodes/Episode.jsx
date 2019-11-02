import React, { Fragment } from "react";
import T from "prop-types";

export const Episode = ({
  name,
  overview,
  still_path,
  season_number,
  episode_number
}) => {
  return (
    <Fragment>
      <ul id="episode">
        <li>1.Name: {name}</li>
        <li>2.Overview: {overview}</li>
        <li>
          <img
            src={`https://image.tmdb.org/t/p/w500_and_h282_face${still_path}`}
            aria-hidden
            alt={`Image ${name} is not available`}
          />
        </li>
        <li>4.Number of Seasons: {season_number}</li>
        <li>5.Number of Episodes: {episode_number}</li>
      </ul>
    </Fragment>
  );
};

Episode.propTypes = {
  name: T.string.isRequired,
  overview: T.string.isRequired,
  still_path: T.string,
  season_number: T.number.isRequired,
  episode_number: T.number.isRequired
};
