import Accordion from "react-bootstrap/Accordion";

function AtomAccordionCollapsed(props) {
  return (
    <Accordion    style={{
        boxShadow: 'none',
        WebkitBoxShadow: 'none',
      }}>
      <Accordion.Item eventKey="0">
        <Accordion.Header>{props.title}</Accordion.Header>
        <Accordion.Body>

            {props.text}
            </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AtomAccordionCollapsed;
