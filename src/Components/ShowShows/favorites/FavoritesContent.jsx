import { AiOutlineDelete } from "react-icons/ai";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import AtomButton from "../../Atoms/Button";
import LoadingSpinner from "../../Atoms/Spinner";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

export default function Content(props) {
  const placement = "right"; // Tooltip placement

  let content;
  if (props.loading) {
    // Display spinner if loading is true
    content = <LoadingSpinner />;
  } else if (props.favorites.length === 0) {
    content = <h2 className="m-4">No tenes shows favoritos </h2>;
  } else {
    content = (
      <>
        <h2 className="m-4 glowSubHeaders">Series FavoRitas</h2>

        <ul className="list-unstyled">
          {props.favorites.map((el) => (
            <li key={el.id} className="p-3">
              <Row className="align-items-center">
                {/* Icon column */}
                <Col xs={12} lg={1}>
                  <OverlayTrigger
                    placement={placement}
                    overlay={
                      <Tooltip id={`tooltip-${placement}`}>
                        <strong>Borrar</strong>
                      </Tooltip>
                    }
                  >
                    <AtomButton
                      onClick={() => props.handleDeleteFavorite(el.id)}
                      buttonText={<AiOutlineDelete />}
                    />
                  </OverlayTrigger>
                </Col>
                {/* Name column */}
                <Col xs={12} lg={11}>
                  <Row>
                    <Col>
                      <Link to={`/show/${el.Id}`}>
                        <mark className="rounded">
                          <span className="m-3 text-light fs-3">{el.name}</span>
                        </mark>
                      </Link>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </li>
          ))}
        </ul>
      </>
    );
  }

  return content;
}
