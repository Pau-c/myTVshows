import { getDocs, deleteDoc, getFirestore } from "firebase/firestore";
import { favoriteQuery } from "./getFavorites";

export const deleteFavorite = async (user, id) => {
  try {
    const db = getFirestore();

    const querySnapshot = await getDocs(favoriteQuery(db, user, id));

    querySnapshot.forEach(async (doc) => {
      await deleteDoc(doc.ref);
    });
  } catch (e) {
    console.error("Delete error: ", e);
  }
};
