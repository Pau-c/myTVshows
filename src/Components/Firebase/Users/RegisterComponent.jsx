import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import AtomButton from "../../Atoms/Button";

export default function RegisterComponent(props) {
  const placement = "left"; // tooltip placement

  return (
    <>
      <div className="container-fluid mx-3  h-100 d-flex justify-content-start align-items-center flex-column">
        <h1 className="display-3 m-5 glowSubHeaders ">Registrarse</h1>
        <Card className="m-5 shadow-lg rounded bg-white ">
          {props.error}
          <Form
            onSubmit={props.handleSubmit}
            className="bg-white shadow-md rounded px-3 py-2  m-4"
          >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Direccion de e-mail</Form.Label>
              <div className="mb-4">
                <OverlayTrigger
                  placement={placement}
                  overlay={
                    <Tooltip id={`tooltip-${placement}`}>
                      <strong>Direccion de e-mail</strong>
                    </Tooltip>
                  }
                >
                  <Form.Control
                    type="email"
                    onChange={props.handleEmailChange}
                    className=" border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none "
                    placeholder="email@company.com"
                  />
                </OverlayTrigger>
              </div>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Contraseña</Form.Label>
              <div className="mb-4">
                <OverlayTrigger
                  placement={placement}
                  overlay={
                    <Tooltip id={`tooltip-${placement}`}>
                      <strong>Contraseña </strong>
                    </Tooltip>
                  }
                >
                  <Form.Control
                    type="password"
                    onChange={props.handlePasswordChange}
                    className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                    placeholder="****"
                  />
                </OverlayTrigger>
              </div>{" "}
            </Form.Group>

            <div className="flex items-center justify-between">
              <AtomButton
                type="submit"
                buttonText="Registrarse"
                onClick={props.handleSubmit}
              />
            </div>
          </Form>
        </Card>
      </div>
    </>
  );
}
