import { addDoc, collection, getFirestore} from "firebase/firestore";
import {COLLECTION_favorites} from "../../../constants/constants";

export const addFavorite = async (user, showName) => {
  try {
    const db = getFirestore();
    await addDoc(collection(db, COLLECTION_favorites), {
      name: showName,
      userId: user.uid,
    });
  } catch (e) {
    console.error("Error adding favorite: ", e);
  }
};
