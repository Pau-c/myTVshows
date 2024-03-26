import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card";
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

export default function LoginComponent(props) {
  const placement = "left"; // tooltip placement

    return (
<div className="container-fluid mx-3 h-100 d-flex justify-content-start align-items-center flex-column">
      {props.error }
      <h1 className="display-3 m-5">Login</h1>
      <Card className="m-5 shadow-lg rounded bg-white " >
     
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
            name="email"
            id="email"
            onChange={props.handleChange}
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
            name="password"
            id="password"
            onChange={props.handleChange}
            className=" border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none "
            placeholder="*****"
          /></OverlayTrigger>
        </div>

        <div className="flex items-center justify-between">
        <Button variant="primary" className="p-1 m-2" type="submit"   >
        Login
     </Button>
         
        </div>
      </Form> </Card>
      <div className="m-5">
     <Button variant="primary" type="submit"       onClick={props.handleGoogleSignin}>
        Sign in with Google
       </Button>   <div className="my-4 text-sm flex justify-between px-3">
       <Button variant="secondary" >
        <Link to="/register" className="text-white" >
          Register
        </Link>
        </Button>
      </div> </div> 
     
     
    </div>
    );}