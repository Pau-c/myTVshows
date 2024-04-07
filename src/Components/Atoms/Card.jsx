import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

import { URL_IMAGE } from "../../constants/constants";
import FavoriteButtonIcon from "../ShowShows/favorites/FavoriteButton";
import LoadingSpinner from "../Atoms/Spinner";

const AtomCard = (props) => {
  if (props.loading) {
    return <LoadingSpinner />;
  }
  return (
    <Card className="m-5 shadow-lg rounded">
      <div className="bg-white p-3 m-1 mt-3 rounded">
        <img
          //  crossOrigin="anonymous"
          // cross-origin="use-credentials"
          src={`${URL_IMAGE + props.apiData.poster_path}`}
          className="meme-image w-50 h-auto "
          alt="meme"
        />
      </div>
      <Card.Body>
        <div className="d-flex flex-column">
          <ListGroup variant="flush" className="list-unstyled text-center">
            <ListGroup.Item>
              <span className="fs-2 text-uppercase">{props.apiData.name}</span>
              <span className="fs-6">{props.status}</span>
            </ListGroup.Item>
            <ListGroup.Item>
              <span className="fs-5">{props.apiData.overview}</span>
            </ListGroup.Item>

            <ListGroup.Item /* Icons*/>
              <span className="fw-bold m-4 mb-0 fs-5">
                <FavoriteButtonIcon
                  isFavorite={props.isFavorite}
                  handleFavoriteToggle={props.handleFavoriteToggle}
                />
              </span>
            </ListGroup.Item>
            <ListGroup.Item>
              <span className="fw-bold m-4 mb-0 fs-5">Generos:</span>
              <span className="fs-5">{props.genreElements}</span>
            </ListGroup.Item>
            <ListGroup.Item>
              <span className="fw-bold m-4 mb-0 fs-5">Nro de capitulos:</span>
              <span className="fs-5">{props.apiData.number_of_episodes}</span>
            </ListGroup.Item>
            <ListGroup.Item>
              <span className="fw-bold m-4 mb-0 fs-5">Nro de temporadas:</span>
              <span className="fs-5">{props.apiData.number_of_seasons}</span>
            </ListGroup.Item>

            <ListGroup.Item>
                
            {props.accordionCollapsed}
            </ListGroup.Item>
          </ListGroup>
        </div>
      </Card.Body>
    </Card>
  );
};

export default AtomCard;
