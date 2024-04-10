import { query, where, collection } from "firebase/firestore";
import {COLLECTION_favorites} from "../../../constants/constants";

//checks the show to see if it's favorited  (used in individual show card)
export const favoriteQuery = (db, user, id) => {
  return query(
    collection(db, COLLECTION_favorites),
    where("userId", "==", user.uid),
    where("Id", "==", id),
  );
};
// favorites page: gets all favorites from the user
export const allFavoritesQuery = (db, user) => {
  return query(
    collection(db, COLLECTION_favorites),
    where("userId", "==", user.uid),
  
  );
};