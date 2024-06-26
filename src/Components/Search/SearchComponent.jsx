import React, { useState, useEffect } from "react";
import { fetchShowData } from "../../Helper";
import SearchResultsCarousel from "./SearchResultsCarousel";
import InputSearch from "./input";
import { URLSEARCH } from "../../constants/constants";
import { popupToast, popupMsg } from "../../Components/PopUpMsg";
import { WARNING_COLOR } from "../../constants/constants";

const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;

const SearchComponent = () => {
  const [shows, setShows] = useState([]);
  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [initialSearchPerformed, setInitialSearchPerformed] = useState(false); //prevents the alert being shown on page reload
  const [noResultsAlert, SetnoResultsAlert] = useState(false);
  const URL = `${URLSEARCH}?api_key=${API_KEY}&query=${searchInput}`;

  const showSearchData = async () => {
    try {
      const data = await fetchShowData(URL);
      setShows(data.results);

      if (
        initialSearchPerformed &&
        data.results.length === 0 &&
        searchInput !== ""
      ) {
        SetnoResultsAlert(true);
      }
    } catch (error) {
      console.error(error);
      popupToast("Api error while fetching data", "error");
    }
  };

  const searcher = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = () => {
    setSearch(searchInput);
    setInitialSearchPerformed(true); //sweetAlert
    SetnoResultsAlert(false); //sweetAlert
    showSearchData();
  };

  useEffect(() => {
    showSearchData();
  }, []);

  const results = shows.filter((el) =>
    el.name.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    if (noResultsAlert) {
      popupMsg(
        "No se encontraron series con ese nombre",
        `${WARNING_COLOR}`,
        "warning"
      );
    }
  }, [noResultsAlert]);

  return (
    <div>
      <InputSearch
        searchInput={searchInput}
        searcher={searcher}
        handleSearch={handleSearch}
      />

      <SearchResultsCarousel results={results} />
    </div>
  );
};

export default SearchComponent;
