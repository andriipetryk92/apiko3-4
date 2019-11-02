export const SHOWS = {
  TYPE_SHOWS: "type_shows"
};
export const DisplayShows = (state, action) => {
  switch (action.type) {
    case SHOWS.TYPE_SHOWS:
      return action.typeShowsReducer;
    default:
      console.log("error");
  }
};
