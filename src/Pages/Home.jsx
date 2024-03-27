import React from "react";
import SearchComponent from "../Components/Search/SearchComponent";
import ShowSeries from "../Components/FetchAllShows/FetchShows";

import NavBar from "../Components/Nav/NavBar";

const Home = () => {
  return (
    <div>
      <NavBar />
      <SearchComponent />
      <ShowSeries />
    </div>
  );
};
export default Home;
