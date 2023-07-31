import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Container } from "react-bootstrap";
import { URL_IMAGE } from "../../constants/constants";
//tooltip imports
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

export default function SearchResultsCarousel(props) {
  const placement = "bottom"; // tooltip placement

  return (
    <Container>
      <Carousel  slide={false} controls={true}  indicators={false} touch={true}>
        {props.results.map((show, index) => (
          <Carousel.Item
            className={` ${index === 0 ? "active" : ""}`}
            key={index}
          >
            {/* 4: number of columns */}
            <div className="row">
              {props.results.slice(index, index + 4).map(
                
                (
                  showSearchItem 
                ) => (
                  <div
                    className="col col-md-3 col-sm-auto p-3 d-flex align-items-center"
                    key={showSearchItem.id}
                  >
                    <Card className=" m-1" style={{ width: "18rem" }}>
                      <div className="bg-white p-2 m-1 mt-1 rounded">
                        <img
                          className="card-img-top .img-fluid .img-thumbnail"
                          src={`${URL_IMAGE + showSearchItem.poster_path}`}
                          alt="series poster" style={{  maxHeight: '50vh', width: 'auto' }}
                        />
                        <Card.Body>     <OverlayTrigger
                  placement={placement}
                  overlay={<Tooltip id={`tooltip-${placement}`}><strong>{showSearchItem.name}</strong></Tooltip>}
                >     
                          <div className="d-flex flex-column">
                            <ListGroup variant="flush">
                              <Link
                                to={`/show/${showSearchItem.id}`}
                                style={{ textDecoration: "none" }}
                              >

                                        
                                <ListGroup.Item className="fs-6 carousel-show-title">
                 <span> {showSearchItem.name}</span>     
                                  
                                </ListGroup.Item> 
                              </Link>
                            </ListGroup>
                          </div></OverlayTrigger>
                        </Card.Body>
                      </div>
                    </Card>
                  </div>
                )
              )}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}
