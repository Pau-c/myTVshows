import { AiOutlineDelete } from "react-icons/ai";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

import AtomButton from "../../Atoms/Button";
import LoadingSpinner from "../../Atoms/Spinner";
import { Link } from "react-router-dom";

//shows all favorites
export default function Content(props) {
  const placement = "left"; // tooltip placement

  let content;
  if (props.loading) {
    // Display spinner if loading is true
    content = <LoadingSpinner />;
  } else if (props.favorites.length === 0) {
    content = <h2 className="m-4">No tenes shows favoritos </h2>;
  } else {
    content = (
      <>
        <h2 className="m-4 glowSubHeaders">Shows FavoRitos</h2>
        <div className="">
          <ul className="list-unstyled">
           
            {props.favorites.map((el) => (
              <li key={el.id} className="p-3"> 
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
                <Link to={`/show/${el.Id}`}>
               <mark className="rounded opacity-50">  <span className="m-3  text-dark  fs-3">{el.name}</span></mark>
              </Link>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }

  return content;
}
