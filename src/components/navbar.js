import Nav from "react-bootstrap/Nav"
import { NavLink } from "react-router-dom"

export default function Navbar() {
  return (
    <Nav
      fill
      variant="tabs"
      className="justify-content-center d-flex flex-nowrap my-2"
    >
      <Nav.Item>
        <Nav.Link as={NavLink} to="/">
          About
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={NavLink} to="/experience">
          Experience
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={NavLink} to="/projects">
          Projects
        </Nav.Link>
      </Nav.Item>
      {/* <Nav.Item>
        <Nav.Link as={NavLink} to="/contact">
          Contact
        </Nav.Link>
      </Nav.Item> */}
    </Nav>
  )
}
