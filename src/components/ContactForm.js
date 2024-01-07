import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import useSubmitContactForm from './SubmitContactForm';

const FORM_ENDPOINT = "https://rosy-crawler-409720.el.r.appspot.com/contact-us";

function ContactForm() {
    const { handleSubmit, status, message } = useSubmitContactForm();
  return (
<div className="w-full max-w">
<h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
    <Form action={FORM_ENDPOINT}
    onSubmit={handleSubmit}
    method="POST" className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <Row className="mb-3 mx-auto">
        <Form.Group as={Col} controlId="formGridFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="firstName" className="border border-success col-sm-7" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="lastName" className="border border-success col-sm-7" />
        </Form.Group>
          </Row>

      <Row className="mb-3 mx-auto">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" className="border border-success col-sm-7" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPhone">
          <Form.Label>Phone #</Form.Label>
          <Form.Control type="phone" className="border border-success col-sm-7" />
        </Form.Group>
          </Row>
      <Row className="mt-12 mx-auto" >
      <Form.Group className="mt-12" controlId="formGridMessage">
        <Form.Label>Message</Form.Label>
        <Form.Control className="block w-full p-4 text-xs border border-success" />
      </Form.Group>
          </Row>
    <br/>
    <br/>
      <Button variant="outline-success" type="submit" className="position-absolute start-50 translate-middle bi bi-caret-down-fill">
        Submit
      </Button>
    </Form>
    </div>
);
}

export default ContactForm;