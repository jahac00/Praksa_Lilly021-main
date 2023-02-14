import Container from "react-bootstrap/Container";
// import NavButton from "./NavButton";
import Nav from "react-bootstrap/Nav";
// import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Categories from "../pages/Categories";
import Glasses from "../pages/Glasses";
import Home from "../pages/Home";
import Ingridients from "../pages/Ingridients";
import BartenderBeginner from "../pages/BartenderBeginner";
import BartenderVeteran from "../pages/BartenderVeteran";
import CoctailDetails from "../pages/CoctailDetails";

function NavBar() {
  return (
    <>
      <BrowserRouter>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand as={Link} to="/">
              Coctail Master{" "}
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/categories">
                Categories
              </Nav.Link>
              <Nav.Link as={Link} to="/glasses">
                Glasses
              </Nav.Link>
              <Nav.Link as={Link} to="/ingridients">
                Ingridients
              </Nav.Link>
              <Nav.Link as={Link} to="/bartender-beginner">
                Bartender Beginner
              </Nav.Link>
              <Nav.Link as={Link} to="/bartender-veteran">
                Bartender Veteran
              </Nav.Link>
            </Nav>
            {/* <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search Coctail by ID"
                className="me-2"
                aria-label="Search"
              />
              <NavButton variant="outline-success">Searh</NavButton>
            </Form> */}
          </Container>
        </Navbar>
        <div>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/categories" element={<Categories />}></Route>
            <Route path="/glasses" element={<Glasses />}></Route>
            <Route path="/ingridients" element={<Ingridients />}></Route>
            <Route
              path="/bartender-beginner"
              element={<BartenderBeginner />}
            ></Route>
            <Route
              path="/bartender-veteran"
              element={<BartenderVeteran />}
            ></Route>
            <Route
              path="/coctail/:coctailId"
              element={<CoctailDetails />}
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default NavBar;
