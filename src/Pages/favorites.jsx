import React, { useEffect, useState } from "react";
import { useAuth } from "../Components/context/AuthContext";
import { getFirestore, getDocs, deleteDoc, doc } from "firebase/firestore";
import { allFavoritesQuery } from "../Components/ShowShows/favorites/getFavorites";
import NavBar from "../Components/Nav/NavBar";
import Swal from "sweetalert2";
import { Container } from "react-bootstrap";
import Content from "../Components/ShowShows/favorites/FavoritesContent";
import {COLLECTION_favorites} from "../constants/constants";

const FavoritesList = () => {
  const { user } = useAuth(); // Brings user from context
  const [favorites, setFavorites] = useState([]);

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
        } catch (e) {
          console.error("Couldn't get favorites: ", e);
          Swal.fire("Couldn't get favorites");
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
      Swal.fire("Couldn't delete favorites");
    }
  };

  return (
    <>
      <NavBar />
      <Container className="w-25 p-3 mt-3 w-auto">
        <Content
          favorites={favorites}
          handleDeleteFavorite={handleDeleteFavorite}
        />
      </Container>
    </>
  );
};

export default FavoritesList;
