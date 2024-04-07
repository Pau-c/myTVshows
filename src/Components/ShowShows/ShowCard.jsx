import React from "react";
import "../../App.css";
import AtomAccordionCollapsed from "../Atoms/AccordionCollapsed";

import AtomCard from "../Atoms/Card";

const ShowCard = (props) => {
  const {
    loading,
    showData,
    status,
    isFavorite,
    handleFavoriteToggle,
    genreElements,
    castElements,
    seasonsElements,
  } = props;

  const accordionCollapsed = [
    <AtomAccordionCollapsed
      key="cast"
     
      title={
        <span className="fw-bold m-4 mb-0 fs-5">
          Top 10 Elenco- por cantidad de capitulos:
        </span>
      } 
      text={castElements}
    />,
    <AtomAccordionCollapsed
      key="seasons"
      text={seasonsElements}
      title={<span className="fw-bold m-4 mb-0 fs-5">Temporadas</span>}
    />,
  ];

  return (
    <AtomCard
      loading={loading}
      apiData={showData}
      status={status}
      isFavorite={isFavorite}
      handleFavoriteToggle={handleFavoriteToggle}
      genreElements={genreElements}
      castElements={castElements}
      seasonsElements={seasonsElements}
      accordionCollapsed={accordionCollapsed}
    />
  );
};

export default ShowCard;
