import React from "react";
import T from "prop-types";

export const Episodes = ({ name, toEpisode, episode_number }) => {
  return (
    <li key={episode_number} onClick={() => toEpisode(episode_number)}>
      {name}
    </li>
  );
};

Episodes.propTypes = {
  name: T.string.isRequired,
  toEpisode: T.func,
  episode_number: T.number.isRequired
};
