import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel3 from "./Carousel3";
import Carousel2 from "./Carousel2";
import Carousel1 from "./Carousel1";

function ResponsiveGrid() {
  return (
    <Container>
      {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
      <Row className="justify-content-md-center">
      <Col>
      <h1>
      <strong>Why we should be greening our homes with plants</strong>
      </h1>
      <p>
      Wellness can be fostered through the ‘living’ decor plants provide – they absorb harmful chemicals and regulate humidity – and they’re an inexpensive way to add instant colour and glamour to home interiors
      </p>      
      </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <Carousel1 />
        </Col>
        </Row>
        <br/>
        <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <Carousel2 />
        </Col>
        </Row>
        <br/>
        <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <Carousel3 />
        </Col>
      </Row>
    </Container>
  );
}

export default ResponsiveGrid;
