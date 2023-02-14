import { NavLink } from "react-router-dom";
import { Button  } from "react-bootstrap";

function NavButton() {
  return (
    <NavLink to="/search-bar">
      <Button variant="primary">Search</Button>
    </NavLink>
  );
}

export default NavButton;
