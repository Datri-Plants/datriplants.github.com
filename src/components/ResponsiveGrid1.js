import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel6 from "./Carousel6";
import Carousel5 from "./Carousel5";
import Carousel4 from "./Carousel4";

function ResponsiveGrid1() {
  return (
    <Container>
      {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
      <Row className="justify-content-md-center">
        <Col>
          <h1>
            <strong>Why we should be greening our homes with plants</strong>
          </h1>
          <p>
            Wellness can be fostered through the ‘living’ decor plants provide –
            they absorb harmful chemicals and regulate humidity – and they’re an
            inexpensive way to add instant colour and glamour to home interiors
          </p>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col xs={'auto'} md={{ span: 4}}>
          <Carousel6 />
        </Col>
       
        <br />
        <Col xs={'auto'} md={{ span: 4 }}>
          <Carousel5 />
        </Col>
        
        <br />
        <Col xs={'auto'} md={{ span: 4}}>
          <Carousel4 />
        </Col>
       
        <br />
      </Row>
    </Container>
  );
}

export default ResponsiveGrid1;
