import React, { useState, useEffect } from "react";
import { fetchShowData } from "../../Helper";
import SearchResultsCarousel from "./SearchResultsCarousel";
import InputSearch from "./input";
import { URLSERACH } from "../../constants/constants";
import Swal from "sweetalert2";

const API_KEY =process.env.REACT_APP_MOVIE_API_KEY;


const SearchComponent = () => {
  const [shows, setShows] = useState([]);
  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [initialSearchPerformed, setInitialSearchPerformed] = useState(false);//prevents the alert being shown on page reload
  const [noResultsAlert, SetnoResultsAlert] = useState(false);

  const URL = `${URLSERACH}?api_key=${API_KEY}&query=${searchInput}`;

  const showSearchData = async () => {
    try {
      const data = await fetchShowData(URL);
      setShows(data.results);

      if (initialSearchPerformed && data.results.length === 0 && searchInput !== "") {
        SetnoResultsAlert(true);
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: "Error",
        text: "Api error while fetching data",
        icon: "error",
        confirmButtonColor: "gray",
      });
    }
  };

  const searcher = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = () => {
    setSearch(searchInput);
    setInitialSearchPerformed(true);//sweetAlert
    SetnoResultsAlert(false);//sweetAlert
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
      Swal.fire({
        title: "No shows found by that name",
       
        timer: 1500,
        icon: "error",
        iconColor: "red",
              });
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
