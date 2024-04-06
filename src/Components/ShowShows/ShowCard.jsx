import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Container } from "react-bootstrap";
import { URL_IMAGE } from "../../constants/constants";
import Accordion from "react-bootstrap/Accordion";
import { PosterDownload } from "./Poster/Download";
import Posterize from "./Poster/Posterize";
import FavoriteButtonIcon from "./favorites/FavoriteButton";
import "../../App.css";

export default function ShowCard(props) {
  //poster words, comes from posterize
  const [posterText, setPosterText] = useState("");
  const [posterStyle, setPosterStyle] = useState("classic"); // track selected style

  function handleChange(value) {
    setPosterText(value);
  }
  function handleStyleChange(value) {
    setPosterStyle(value);
  }
  //shows info from one show inside a card.
  return (
    <div>
      {props.showData && (
        <Container className="m-0 p-0">
          <div className="row d-flex justify-content-center">
            <div className="col-md-8 col-lg-8">
              <Card className="m-5 shadow-lg rounded">
                <div className="bg-white p-3 m-1 mt-3 rounded">
                  {/* poster */}
                  <Accordion className="p-1 mb-4 " id="acordion">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        <span className="fw-bold">Posterizar</span>
                      </Accordion.Header>
                      <Accordion.Body id="posterizarButton">
                        <Posterize
                          posterText={posterText}
                          handleChange={handleChange}
                        />
                        <div className="d-flex align-items-center mb-3">
                          <label
                            htmlFor="posterStyle"
                            className="me-2 text-light"
                          >
                            Seleccionar estilo
                          </label>
                          <select
                            id="posterStyle"
                            className="form-select"
                            value={posterStyle}
                            onChange={(e) => handleStyleChange(e.target.value)}
                          >
                            <option value="classic">Classic</option>
                            <option value="retro">Retro</option>
                          </select>
                        </div>
                        <PosterDownload name={props.showData.name} />
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>

                  <div className="meme p-0 m-0 row d-flex " id="download">
                    {/* Change className based on selected font style */}
                    <h2
                      className={` ${
                        posterStyle === "retro"
                          ? "meme-text-retro top"
                          : "meme-text top"
                      }`}
                    >
                      {posterText}
                    </h2>

                    <img
                      //  crossOrigin="anonymous"
                      // cross-origin="use-credentials"
                      src={`${URL_IMAGE + props.showData.poster_path}`}
                      className="meme-image w-50 h-auto "
                      alt="meme"
                    />
                  </div>
                  <Card.Body>
                    <div className="d-flex flex-column">
                      <ListGroup
                        variant="flush"
                        className="list-unstyled text-center"
                      >
                        <ListGroup.Item>
                          <span className="fs-2 text-uppercase">
                            {props.showData.name}
                          </span>
                          <span className="fs-6">{props.status}</span>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <span className="fs-5">
                            {props.showData.overview}
                          </span>
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
                          <span className="fw-bold m-4 mb-0 fs-5">
                            Generos:
                          </span>
                          <span className="fs-5">{props.genreElements}</span>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <span className="fw-bold m-4 mb-0 fs-5">
                            Nro de capitulos:
                          </span>
                          <span className="fs-5">{props.showData.number_of_episodes}</span>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <span className="fw-bold m-4 mb-0 fs-5">
                            Nro de temporadas:
                          </span>
                          <span className="fs-5">{props.showData.number_of_seasons}</span>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <span className="fw-bold m-4 mb-0 fs-5">
                            Elenco- por cantidad de capitulos:
                          </span>
                          <span className="fs-5">{props.castElements}</span>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <span className="fs-5">{props.seasonsElements}</span>
                        </ListGroup.Item>
                      </ListGroup>
                    </div>
                  </Card.Body>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      )}
    </div>
  );
}
