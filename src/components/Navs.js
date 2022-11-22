import Nav from 'react-bootstrap/Nav';



function Navs() {
  return (
    <>
    <br />
      <Nav className="justify-content-end" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/shop" eventKey="link-2">Shop</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3">
            Contact
          </Nav.Link>
        </Nav.Item>
        <br />
        <br />
      </Nav>
    </>
  );
}

export default Navs;