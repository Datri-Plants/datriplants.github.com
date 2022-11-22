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
      <Row>
        <Col xs={6} md={4}>
          <Carousel6 />
        </Col>
        <Col xs={6} md={4}>
          <Carousel5 />
        </Col>
        <Col xs={6} md={4}>
          <Carousel4 />
        </Col>
      </Row>
    </Container>
  );
}

export default ResponsiveGrid;
