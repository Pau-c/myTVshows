import React, { useState, useEffect } from "react";
import { fetchShowData } from "../../Helper";
import ShowCard from "./ShowCard";
import { URL_TV as URL, LANGUAGE } from "../../constants/constants";

const API_KEY =process.env.REACT_APP_MOVIE_API_KEY;



//gets show's info from clicking on a show in the grid of shows in home or from search results
const Show = () => {
  const [showData, setShowData] = useState(null);

  // get id from url
  const urlPath = window.location.pathname;
  const showId = urlPath.substring(urlPath.lastIndexOf("/") + 1);

  //get show info
  useEffect(() => {
    fetchShowData(`${URL}${showId}?api_key=${API_KEY}${LANGUAGE}`, setShowData);
  }, [showId]);

  // generos de peliculas
  let genreElements = null;
  if (showData && showData.genres) {
    genreElements = [];
    for (const genre of showData.genres) {
      genreElements.push(<span key={genre.id}> |{genre.name}| </span>);
    }
  }

  // temporadas de peliculas
  let seasonsElements = null;
  if (showData && showData.seasons) {
    seasonsElements = [];
    for (const [index, element] of showData.seasons.entries()) {
      const seasonNumber = index > 0 ? index + 1 : 1;
      seasonsElements.push(
        <div key={element.id}>
          <span style={{ fontWeight: "bold" }}>Temporada {seasonNumber}: </span>
          <span>{element.episode_count} episodios |</span>
          <span style={{ fontWeight: 600 }}>Rating: </span>
          <span>{element.vote_average}</span>
        </div>
      );
    }
  }
  //get if the show is continued or has been cancelled
  const status =
    showData && showData.in_production ? "(Continua)" : "(Terminada)";

  return (
    
      //renders card with the passed props
      <ShowCard
        status={status}
        seasonsElements={seasonsElements}
        showData={showData}
        genreElements={genreElements}
      />
    
  );
};

export default Show;
