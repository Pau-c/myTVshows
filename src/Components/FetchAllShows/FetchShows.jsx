import React, { useState, useEffect } from "react";
import { fetchShowData } from "../../Helper";
import FetchShowGrid from "./FetchShowsGrid";
import {
  FILTER_POPULARITY,
  LANGUAGE,
  URL_DISCOVER,
} from "../../constants/constants";

const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;

const ShowSeries = () => {
  const [showData, setShowData] = useState([]);

  const URL = `${URL_DISCOVER}?api_key=${API_KEY}${FILTER_POPULARITY}${LANGUAGE}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchShowData(URL);
        setShowData(data.results);
        // console.log("showData:", showData);
      } catch (error) {

       // console.error(error);

      }
    };

    fetchData();
  }, []);

  return <FetchShowGrid showData={showData} />;
};

export default ShowSeries;
