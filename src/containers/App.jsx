import React, {
  Fragment,
  useState,
  useRef,
  useEffect,
  useReducer
} from "react";
import { Header } from "../components/Header";
import { TvShows } from "../components/TvShows";
import { Pagination } from "../components/Pagination";
import { DisplayShows, SHOWS } from "../reducer/reducer";
import T from "prop-types";

export const App = () => {
  const [typeShows, setTypeShows] = useState("popular");
  const [numberPage, setNumberPage] = useState(1);
  const [showPagination, setShowPagination] = useState(true);
  const [typeShowsReducer, dispatch] = useReducer(DisplayShows, "popular");
  // useReducer використав для прикладу, але мені зручніше без нього

  const whatTypeShows = typeShowsReducer => {
    dispatch({
      typeShowsReducer,
      type: SHOWS.TYPE_SHOWS
    });
  };

  const counter = useRef(0);
  useEffect(() => {
    counter.current = counter.current + 1;
  });
  const nextPage = () => {
    if (numberPage === 999) {
      setNumberPage(numberPage);
    } else setNumberPage(numberPage + 1);
  };
  const previousPage = () => {
    if (numberPage === 1) {
      setNumberPage(1);
    } else setNumberPage(numberPage - 1);
  };
  const typePopular = () => {
    whatTypeShows("popular");
    setNumberPage(1);
    setTypeShows("popular");
  };
  const typeRated = () => {
    whatTypeShows("top_rated");
    setTypeShows("top_rated");
    setNumberPage(1);
  };
  const checkPagination = check => {
    setShowPagination(check);
  };

  return (
    <Fragment>
      <Header typePopular={typePopular} typeRated={typeRated} />
      <h1>{`The App component has been re-rendered ${
        counter.current
      } times`}</h1>
      <TvShows
        typeShows={typeShows}
        numberPage={numberPage}
        checkPagination={checkPagination}
      />
      {showPagination && (
        <Pagination nextPage={nextPage} previousPage={previousPage} />
      )}
    </Fragment>
  );
};
App.propTypes = {
  typePopular: T.func,
  typeRanted: T.func,
  typeShows: T.string,
  numberPage: T.number,
  nextPage: T.func,
  previousPage: T.func
};
