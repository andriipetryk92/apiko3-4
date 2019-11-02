import React from "react";
import T from "prop-types";
import { ThemeContext } from "../ThemeContext";

export const ShowItem = ({ original_name, backdrop_path, id, toSerial }) => {
  const color = React.useContext(ThemeContext);

  return (
    <li className="show" onClick={() => toSerial(id)}>
      <p
        className="inner"
        style={{ color }}
      >{`${original_name}  <--used green color Context`}</p>
      <img
        src={`https://image.tmdb.org/t/p/w500_and_h282_face${backdrop_path}`}
        aria-hidden
        alt={`Image ${original_name} is not available`}
      />
    </li>
  );
};
ShowItem.propTypes = {
  original_name: T.string.isRequired,
  backdrop_path: T.string.isRequired,
  id: T.number.isRequired,
  toSerial: T.func.isRequired
};
