import { getDocs, getFirestore } from "firebase/firestore";
import { favoriteQuery } from "./getFavorites";

export const checkFavoriteStatus = async (user, id) => {
  if (user) {
    try {
      const db = getFirestore();
      const querySnapshot = await getDocs(favoriteQuery(db, user, id));

      return !querySnapshot.empty;
    } catch (e) {
      console.error("Error: ", e);
    }
  }

  return false;
};
