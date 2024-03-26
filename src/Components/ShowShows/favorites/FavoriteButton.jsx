import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
//red heart icon 

function FavoriteButtonIcon(props) {
  return (
    <div
      style={{
        position: "absolute",
        top: "0.5rem",
        right: "0.5rem",
        color: props.isFavorite ? "red" : "gray",
        cursor: "pointer",
      }}
      onClick={props.handleFavoriteToggle}
    >
      {props.isFavorite ? <AiFillHeart /> : <AiOutlineHeart />}
    </div>
  );
}
export default FavoriteButtonIcon;