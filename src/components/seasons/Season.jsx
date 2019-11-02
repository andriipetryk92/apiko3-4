import React, { Fragment } from "react";
import { Episodes } from "../episodes/Episodes";
import T from "prop-types";

export const Season = ({
  name,
  overview,
  poster_path,
  season_number,
  episodes,
  toEpisode
}) => {
  return (
    <Fragment>
      <ul id="season">
        <li>1.Name: {name}</li>
        <li>2.Overview:{overview}</li>
        <li>
          <img
            src={`https://image.tmdb.org/t/p/w500_and_h282_face${poster_path}`}
            aria-hidden
            alt={`Image ${name} is not available`}
          />
        </li>
        <li>4.Number of Seasons: {season_number}</li>
        <li>5.Count of Episodes: {episodes.length}</li>
        <li id="data">
          <p id="big_text">Episodes:</p>
          <ol>
            {episodes.map(episode => (
              <Episodes key={episode.id} {...episode} toEpisode={toEpisode} />
            ))}
          </ol>
        </li>
      </ul>
    </Fragment>
  );
};

Season.propTypes = {
  name: T.string.isRequired,
  overview: T.string.isRequired,
  still_path: T.string,
  season_number: T.number.isRequired,
  episode_number: T.number,
  toEpisode: T.func
};
