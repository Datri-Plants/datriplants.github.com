import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./nicepage.module.css";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Fragment } from "react";
import Header from "./components/Header";
import FooterComponent from "./components/FooterComponent";
import Cart from "./components/Cart";
import ContactForm from "./components/ContactForm";

function App() {
  return (

    <div>

      <div>
        <Routes>
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/home" element={<div>
            <Fragment>
              <Header>

              </Header>

            </Fragment>

            <FooterComponent />
          </div>} />
          <Route path="/" element={<div>
            <Fragment>
              <Header>

              </Header>

            </Fragment>

            <FooterComponent />
          </div>} />
        </Routes>
      </div>

    </div>



  );
}

export default App;
