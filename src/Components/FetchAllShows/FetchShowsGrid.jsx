import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { URL_IMAGE } from "../../constants/constants"

export default function FetchShowGrid(props) {
  return (
    <Container>
      <h1 className="m-4 glowSubHeaders mt-5">Series Populares</h1>
      <div className="row">
        {props.showData.map((show, index) => (
          <div className="col-md-4 p-1 d-flex align-items-stretch my-2" key={index}>
            <Card className="m-2" style={{ width: "18rem" }}>
              <div className="bg-white p-3 m-1 mt-3">
                <img
                  className="card-img-top .img-fluid .img-thumbnail rounded"
                  src={`${URL_IMAGE + show.poster_path}`}
                  alt="Show Poster"
                />
                <div className="d-flex flex-column">
                  <Card.Body>
                    <ListGroup
                      variant="flush"
                      className="list-group list-group-flush"
                    >
                      <ListGroup.Item className="fs-3">
                        <Link to={`/show/${show.id}`}>{show.name}</Link>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Fecha de estreno: {show.first_air_date}
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </Container>
  );
}
