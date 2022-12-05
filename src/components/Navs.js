import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import  { NavbarBrand } from 'react-bootstrap';
import '../App.css';
import logo from '../images/logo256.png';

function Navs() {
  return (
    <div>
    <br />
    <Navbar bg="white">
    <NavbarBrand>
    <img src={logo} alt="logo" className="App-logo">
      </img>
    </NavbarBrand>
    </Navbar>
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
    </div>
  );
}

export default Navs;