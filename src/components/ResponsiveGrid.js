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
      <Row>
        <Col xs={6} md={4}>
          <Carousel1 />
        </Col>
        <Col xs={6} md={4}>
          <Carousel2 />
        </Col>
        <Col xs={6} md={4}>
          <Carousel3 />
        </Col>
      </Row>
    </Container>
  );
}

export default ResponsiveGrid;
