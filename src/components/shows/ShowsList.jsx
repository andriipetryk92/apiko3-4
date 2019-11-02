import React from "react";
import T from "prop-types";
import { ShowItem } from "./ShowItem";
import { ThemeContext } from "../ThemeContext";

export const ShowsList = ({ shows, toSerial }) => {
  return (
    <ThemeContext.Provider value="green">
      <ul className="list">
        {shows.map(show => (
          <ShowItem key={show.name} {...show} toSerial={toSerial} />
        ))}
      </ul>
    </ThemeContext.Provider>
  );
};

ShowItem.propTypes = {
  toSerial: T.func,
  shows: T.array
};
