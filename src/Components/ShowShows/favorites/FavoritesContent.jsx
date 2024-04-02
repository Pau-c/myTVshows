import { AiOutlineDelete } from "react-icons/ai";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import ListGroup from "react-bootstrap/ListGroup";
import AtomButton from "../../Atoms/Button";

export default function Content(props) {
  const placement = "left"; // tooltip placement

  let content;
  if (props.favorites.length === 0) {
    content = <h2 className="m-4">You don't have favorite shows</h2>;
  } else {
    content = (
      <>
        <h2 className="m-4">Favorite Shows</h2>
        <div className="">
          <ListGroup as="ul" unnumbered>
            {props.favorites.map((el) => (
              <ListGroup.Item as="li" key={el.id} className="p-3">
                <OverlayTrigger
                  placement={placement}
                  overlay={
                    <Tooltip id={`tooltip-${placement}`}>
                      <strong>Delete</strong>
                    </Tooltip>
                  }
                >
                  <AtomButton 
                    // You can adjust this linkTo prop as needed
                    onClick={() => props.handleDeleteFavorite(el.id)}
                    buttonText={<AiOutlineDelete />}
                  />
                </OverlayTrigger>

                <span className="m-3 fw-light text-dark fs-3">{el.name}</span>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
      </>
    );
  }

  return content;
}
