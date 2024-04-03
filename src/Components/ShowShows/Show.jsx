import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { fetchShowData } from "../../Helper";
import ShowCard from "./ShowCard";
import { URL_TV as URL, LANGUAGE } from "../../constants/constants";
import { checkFavoriteStatus } from "./favorites/checkFavoriteStatus";
import { addFavorite } from "./favorites/addFavorite";
import { deleteFavorite } from "./favorites/deleteFavorite";
import Swal from "sweetalert2";
import { errorPopupMsg } from "../PopUpMsg";

const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;

//gets show's info from clicking on a show in the grid of shows in home or from search results
//checks favorite states and passes off props to card

const Show = () => {
  const { user } = useAuth(); // Using the useAuth hook to get the current user
  const [showData, setShowData] = useState(null); // State variable for storing show data
  const [isFavorite, setIsFavorite] = useState(false); // State variable for tracking favorite status

  // Function to fetch show data
  const fetchShow = async (showId) => {
    const data = await fetchShowData(
      `${URL}${showId}?api_key=${API_KEY}${LANGUAGE}`
    );
    setShowData(data);
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
    const favoriteExists = await checkFavoriteStatus(user, showData.name);
    setIsFavorite(favoriteExists);
  };

  // Function to handle favorite toggle
  const handleFavoriteToggle = async () => {
    if (user) {
      if (isFavorite) {
        await deleteFavorite(user, showData.name);
        setIsFavorite(false);
      } else {
        await addFavorite(user, showData.name);
        setIsFavorite(true);
      }
    } else {
      // Show alert if user is not logged in
      errorPopupMsg("Acceso no permitido, primero logueate");
    }
  };

  // Render genre elements based on show data
  let genreElements = null;
  //console.log(showData)
  if (showData && showData.genres) {
    genreElements = showData.genres.map((genre) => (
      <span key={genre.id}> |{genre.name}| </span>
    ));
  }

  // Render seasons elements based on show data
  let seasonsElements = null;
  if (showData && showData.seasons) {
    seasonsElements = showData.seasons.map((element, index) => (
      <div key={element.id}>
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
      showData={showData}
      genreElements={genreElements}
      isFavorite={isFavorite}
      handleFavoriteToggle={handleFavoriteToggle}
    />
  );
};

export default Show;
