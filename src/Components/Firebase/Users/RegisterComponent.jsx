import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

export default function RegisterComponent(props) {
  const placement = "left"; // tooltip placement

  return (
    <>
      <div className="container-fluid mx-3  h-100 d-flex justify-content-start align-items-center flex-column">
       
        <h1 className="display-3 m-5 ">Register</h1>
        <Card className="m-5 shadow-lg rounded bg-white " >
        {props.error}
        <Form
          onSubmit={props.handleSubmit}
          className="bg-white shadow-md rounded px-3 py-2  m-4"
        >
          <div className="mb-4">
          <OverlayTrigger
                  placement={placement}
                  overlay={<Tooltip id={`tooltip-${placement}`}><strong>Write your email address</strong></Tooltip>}
                >
           
           
            <Form.Control
              type="email"
              
                          onChange={props.handleEmailChange}
              className=" border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none "
              placeholder="email@company.com"
            /></OverlayTrigger>
          </div>

          <div className="mb-4">
          <OverlayTrigger
                  placement={placement}
                  overlay={<Tooltip id={`tooltip-${placement}`}><strong>Write your password</strong></Tooltip>}
                >
            <Form.Control
              type="password"
              onChange={props.handlePasswordChange}
              className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
              placeholder="****"
            /></OverlayTrigger>
          </div>

          <div className="flex items-center justify-between">
            <Button variant="secondary" className="p-1 m-2 text-white" type="submit">
              Register
            </Button>
          </div>
        </Form></Card>
      </div>
    </>
  );
}
