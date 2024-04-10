import React, { useEffect, useState } from "react";
import { useAuth } from "../Components/context/AuthContext";
import { getFirestore, getDocs, deleteDoc, doc } from "firebase/firestore";
import { allFavoritesQuery } from "../Components/ShowShows/favorites/getFavorites";
import NavBar from "../Components/Nav/NavBar";
import { Container } from "react-bootstrap";
import Content from "../Components/ShowShows/favorites/FavoritesContent";
import { COLLECTION_favorites } from "../constants/constants";
import { popupMsg } from "../Components/PopUpMsg";


//for favorites page
const FavoritesList = () => {
  const { user } = useAuth(); // Brings user from context
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true); //to control loading spinner
  // text for error msg
  const errorPopupMsgFetch = "No se pudo encontrar la lista de shows favoritos";
  const errorPopupMsgdelete =
    "No se pudo borrar el show de la lista de 'favoritos'";

  useEffect(() => {
    const fetchFavorites = async () => {
      if (user) {
        try {
          const db = getFirestore();
          const querySnapshot = await getDocs(allFavoritesQuery(db, user));
          const allFavoritesData = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setFavorites(allFavoritesData);
          setLoading(false);
        } catch (e) {
          console.error("Couldn't get favorites", e);
          popupMsg(errorPopupMsgFetch);
        }
      }
    };

    fetchFavorites();
  }, [user]);

  const handleDeleteFavorite = async (favoriteId) => {
    try {
      const db = getFirestore();
      const favoriteRef = doc(db, COLLECTION_favorites, favoriteId);
      await deleteDoc(favoriteRef);

      setFavorites((prevFavorites) =>
        prevFavorites.filter((favorite) => favorite.id !== favoriteId)
      );
    } catch (e) {
      console.error("Error deleting favorite: ", e);
      popupMsg(errorPopupMsgdelete);
    }
  };

  return (
    <>
      <NavBar />
      <Container className="w-100 h-100 p-3 mt-3 ">
        <Content
          favorites={favorites}
          handleDeleteFavorite={handleDeleteFavorite}
          loading={loading}
        />
      </Container>
    </>
  );
};

export default FavoritesList;
