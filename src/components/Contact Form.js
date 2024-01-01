import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import useSubmitContactForm from './SubmitContactForm';

const FORM_ENDPOINT = "http://localhost:5000/orders";

function ContactForm() {
    const { handleSubmit, status, message } = useSubmitContactForm();
  return (
    <Form action={FORM_ENDPOINT}
    onSubmit={handleSubmit}
    method="POST">
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="firstName" placeholder="First Name" className="border border-success" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="lastName" placeholder="Last Name" className="border border-success" />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" className="border border-success" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPhone">
          <Form.Label>Phone #</Form.Label>
          <Form.Control type="phone" placeholder="Enter Phone #" className="border border-success" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" className="border border-success" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridStreet">
        <Form.Label>Street</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" className="border border-success" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control className="border border-success" />
        </Form.Group>
    
        <Form.Group as={Col} controlId="formGridDistrict">
          <Form.Label>District</Form.Label>
          <Form.Control className="border border-success"/>
        </Form.Group> 

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose..." className="border border-success">
            <option>Andhra Pradesh</option>
            <option>Telangana</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPostalCode">
          <Form.Label>Postal Code</Form.Label>
          <Form.Control  className="border border-success"/>
        </Form.Group>
      </Row>
    <br/>
      <Button variant="outline-success" type="submit" className="position-absolute start-50 translate-middle bi bi-caret-down-fill">
        Submit
      </Button>
    </Form>
  );
}

export default ContactForm;