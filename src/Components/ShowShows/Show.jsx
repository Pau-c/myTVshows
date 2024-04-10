import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { fetchShowData } from "../../Helper";
import ShowCard from "./ShowCard";
import {
  URL_TV as URL,
  LANGUAGE,
  WARNING_COLOR,
} from "../../constants/constants";
import { checkFavoriteStatus } from "./favorites/checkFavoriteStatus";
import { addFavorite } from "./favorites/addFavorite";
import { deleteFavorite } from "./favorites/deleteFavorite";
import { popupMsg } from "../PopUpMsg";

const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;

//gets show's info from clicking on a show in the grid of shows in home or from search results
//checks favorite states and passes off props to card

const Show = () => {
  const { user } = useAuth(); // Using the useAuth hook to get the current user
  const [showData, setShowData] = useState(null); // State variable for storing show data
  const [loading, setLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false); // State variable for tracking favorite status

  // Function to fetch show data
  const fetchShow = async (showId) => {
    const data1 = await fetchShowData(
      `${URL}${showId}?api_key=${API_KEY}${LANGUAGE}&append_to_response=aggregate_credits`
    );

    const {
      genres,
      name,
      number_of_episodes,
      number_of_seasons,
      overview,
      poster_path,
      seasons,
      status,
      aggregate_credits,
      id,
    } = data1;

    setShowData({
      genres,
      name,
      number_of_episodes,
      number_of_seasons,
      aggregate_credits,
      overview,
      poster_path,
      seasons,
      status,
      id,
    });
    setLoading(false);
  };

  // Fetch show data when the component mounts
  useEffect(() => {
    const urlPath = window.location.pathname;
    const showId = urlPath.substring(urlPath.lastIndexOf("/") + 1);
    fetchShow(showId);
  }, []);

  // Check favorite status when user or showData changes
  useEffect(() => {
    if (user && showData) {
      checkFavorite();
    }
  }, [user, showData]);

  // Function to check favorite status
  const checkFavorite = async () => {
    const favoriteExists = await checkFavoriteStatus(user, showData.id);
    setIsFavorite(favoriteExists);
  };

  // Function to handle favorite toggle
  const handleFavoriteToggle = async () => {
    if (user) {
      if (isFavorite) {
        await deleteFavorite(user, showData.name, showData.id);
        setIsFavorite(false);
      } else {
        await addFavorite(user, showData.name, showData.id);
        setIsFavorite(true);
      }
    } else {
      // Show alert if user is not logged in
      popupMsg(
        "Acceso no permitido, primero logueate",
        `${WARNING_COLOR}`,
        "error"
      );
    }
  };

  // Render genre elements based on show data
  let genreElements = null;
  //console.log(showData, "edited object");
  if (showData && showData.genres) {
    genreElements = showData.genres.map((genre, index) => (
      <span key={`genre-${index}`}> |{genre.name}| </span>
    ));
  }

  // Render the top 10 cast by number of eps involved
  let castElements = null;

  if (
    showData &&
    showData.aggregate_credits &&
    showData.aggregate_credits.cast
  ) {
    const castArray = showData.aggregate_credits.cast;
    const topTenCast = [];

    castArray.forEach((element, index) => {
      if (index < 11) {
        topTenCast.push(element);
      }
    });

    castElements = topTenCast.map((actor, index) => (
      <>
        <li key={`actor-${index}`}>
          <span>
            {actor.name}: {actor.roles[0].character}
            <span className="small">({actor.total_episode_count}) </span>
          </span>
        </li>
      </>
    ));
  }

  // Render seasons elements based on show data
  let seasonsElements = null;
  if (showData && showData.seasons) {
    seasonsElements = showData.seasons.map((element, index) => (
      <div key={`season-${index}`}>
        <span style={{ fontWeight: "bold" }}>Temporada {index + 1}: </span>
        <span>{element.episode_count} episodios |</span>
        <span style={{ fontWeight: 600 }}>Rating: </span>
        <span>{element.vote_average}</span>
      </div>
    ));
  }

  // Determine show status (Continua or Terminada)
  const status =
    showData && showData.in_production ? "(Continua)" : "(Terminada)";

  // Render  ShowCard component with props
  return (
    <ShowCard
      status={status}
      seasonsElements={seasonsElements}
      genreElements={genreElements}
      castElements={castElements}
      isFavorite={isFavorite}
      handleFavoriteToggle={handleFavoriteToggle}
      loading={loading}
      // api data
      showData={showData}
    />
  );
};

export default Show;
