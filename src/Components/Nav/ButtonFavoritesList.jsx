import React from "react";
import { useAuth } from "../context/AuthContext";
import AtomButton from "../Atoms/Button";
import { FaHeartCircleCheck } from "react-icons/fa6";

export default function ButtonFavoriteList() {
 
    return (
      <AtomButton
        className="glowButton"
        linkTo="/favorites"
        buttonText={
          <>
            Favoritos
            <FaHeartCircleCheck />
          </>
        }
      />
    );
  }

 
