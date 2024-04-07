import Accordion from "react-bootstrap/Accordion";

function AtomAccordionCollapsed(props) {
  return (
    <Accordion    style={{
        boxShadow: 'none',
        WebkitBoxShadow: 'none',
      }}>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
        <span className="fw-bold m-4 mb-0 fs-5">
          {props.title} </span>
          </Accordion.Header>
        <Accordion.Body>
        <span className=" m-4 mb-0 fs-5">
            {props.text}</span>
            </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AtomAccordionCollapsed;
