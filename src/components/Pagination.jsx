import React from "react";
import T from "prop-types";

export const Pagination = ({ previousPage, nextPage }) => {
  return (
    <div id="pagination">
      <button id="previous" onClick={() => previousPage()}>
        Previous
      </button>
      <button id="next" onClick={() => nextPage()}>
        Next
      </button>
    </div>
  );
};

Pagination.propTypes = {
  previousPage: T.func,
  nextPage: T.func
};
