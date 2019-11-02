import React, { useState, useEffect } from "react";
import { ShowsList } from "./shows/ShowsList";
import { Serial } from "./serial/Serial";
import { Season } from "./seasons/Season";
import { Episode } from "./episodes/Episode";
import { get } from "../helpers/api";
import { getProps } from "./hoc";
import T from "prop-types";

const BASE_URL = "https://api.themoviedb.org/3/tv/";
const TvShowsComponent = ({
  toSerial,
  toSeason,
  toEpisode,
  typeShows,
  numberPage,
  checkPagination
}) => {
  const [tvShows, setTvShows] = useState([]);
  const [serial, setSerial] = useState([]);
  const [season, setSeason] = useState([]);
  const [episode, setEpisode] = useState([]);
  const [page, setPage] = useState("");

  // як зробити щоб на клік в хедері того самого розділу відбувався рендер коли активний серіал/сезон\епізод

  useEffect(() => {
    get(
      `${BASE_URL}${typeShows}?api_key=574d4246c632c7411a6f4ac3fcc28fbe&language=en-US&page=${numberPage}`
    )
      .then(data => {
        setTvShows(data.results);
        setPage("tvShows");
      })
      .catch(error => console.error(error));
  }, [numberPage, typeShows]);

  toSerial = idSerial => {
    get(
      `${BASE_URL}${idSerial}?api_key=574d4246c632c7411a6f4ac3fcc28fbe&language=en-US`
    )
      .then(data => {
        setSerial(data);
        setPage("serial");
      })
      .catch(error => console.error(error));
  };
  toSeason = season_number => {
    get(
      `${BASE_URL}${
        serial.id
      }/season/${season_number}?api_key=574d4246c632c7411a6f4ac3fcc28fbe&language=en-US`
    )
      .then(data => {
        setSeason(data);
        setPage("season");
      })
      .catch(error => console.log(error));
  };
  toEpisode = episode_number => {
    get(
      `${BASE_URL}${serial.id}/season/${
        season.season_number
      }/episode/${episode_number}?api_key=574d4246c632c7411a6f4ac3fcc28fbe&language=en-US`
    )
      .then(data => {
        setEpisode(data);
        setPage("episode");
      })
      .catch(error => console.log(error));
  };

  useEffect(() => {
    page === "tvShows" ? checkPagination(true) : checkPagination(false);
  });

  return (
    <div id="content">
      {page === "tvShows" && <ShowsList shows={tvShows} toSerial={toSerial} />}
      {page === "serial" && <Serial {...serial} toSeason={toSeason} />}
      {page === "season" && <Season {...season} toEpisode={toEpisode} />}
      {page === "episode" && <Episode {...episode} />}
    </div>
  );
};

TvShowsComponent.propTypes = {
  toSerial: T.func,
  toSeason: T.func,
  toEpisode: T.func,
  typeShows: T.string.isRequired,
  numberPage: T.number.isRequired,
  page: T.string
};

export const TvShows = getProps(TvShowsComponent);
