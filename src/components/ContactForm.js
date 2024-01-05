import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import useSubmitContactForm from './SubmitContactForm';

const FORM_ENDPOINT = "https://rosy-crawler-409720.el.r.appspot.com/users";

function ContactForm() {
    const { handleSubmit, status, message } = useSubmitContactForm();
  return (
<div>
<h1 style={{padding:"1rem"}}>
                Contact Us
            </h1>
    <Form action={FORM_ENDPOINT}
    onSubmit={handleSubmit}
    method="POST">
      <Row className="mb-3" style={{padding: "1rem"}}>
        <Form.Group as={Col} controlId="formGridFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="firstName" className="border border-success col-sm-7" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="lastName" className="border border-success col-sm-7" />
        </Form.Group>
      </Row>

      <Row className="mb-3" style={{padding: "1rem"}} >
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" className="border border-success col-sm-7" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPhone">
          <Form.Label>Phone #</Form.Label>
          <Form.Control type="phone" className="border border-success col-sm-7" />
        </Form.Group>
      </Row>
      <Row className="mb-3" style={{padding: "1rem"}}>
      <Form.Group className="mb-3" controlId="formGridAddress">
        <Form.Label>Message</Form.Label>
        <Form.Control className="border border-success col-sm-7" />
      </Form.Group>
      </Row>
    <br/>
      <Button variant="outline-success" type="submit" className="position-absolute start-50 translate-middle bi bi-caret-down-fill">
        Submit
      </Button>
    </Form>
    </div>
  );
}

export default ContactForm;