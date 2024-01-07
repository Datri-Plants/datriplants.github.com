import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import useSubmitOrderForm from './SubmitOrderForm';
import { Container} from "@react-email/components";

const FORM_ENDPOINT = "https://rosy-crawler-409720.el.r.appspot.com/users";

function OrderInfoForm() {
    const { handleSubmit, status, message } = useSubmitOrderForm();
  return (
    <div className='w-full'>  
    
    <Container >
    
    <Form className='p-8' action={FORM_ENDPOINT}
    onSubmit={handleSubmit}
    method="POST">
      <Row className="mx-auto mb-3" >
        <Form.Group as={Col} controlId="formGridFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="firstName" className="border border-success col-sm-7" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="lastName" className="border border-success col-sm-7" />
        </Form.Group>
      </Row>

      <Row className="mx-auto mb-3" >
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" className="border border-success col-sm-7" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPhone">
          <Form.Label>Phone #</Form.Label>
          <Form.Control type="phone" className="border border-success col-sm-7" />
        </Form.Group>
      </Row>
      <Row className="mx-auto mb-3" >
      <Form.Group className="mb-3" controlId="formGridAddress">
        <Form.Label>Address</Form.Label>
        <Form.Control className="border border-success col-sm-7" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridStreet">
        <Form.Label>Street</Form.Label>
        <Form.Control className="border border-success col-sm-7" />
      </Form.Group>
      </Row>
      <Row className="mx-auto mb-3" >
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control className="border border-success col-sm-7" />
        </Form.Group>
    
        <Form.Group as={Col} controlId="formGridDistrict">
          <Form.Label>District</Form.Label>
          <Form.Control className="border border-success col-sm-7"/>
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
          <Form.Control  className="border border-success col-sm-1"/>
        </Form.Group>
      </Row>
      <br/>
      <Button variant="outline-success" type="submit" className="position-absolute start-50 translate-middle bi bi-caret-down-fill">
        Submit
      </Button>
    </Form>
    
    </Container>
    </div>
  );
}

export default OrderInfoForm;