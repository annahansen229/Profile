import Nav from "react-bootstrap/Nav"

export default function Navbar() {
  return (
    <Nav className="justify-content-center container" fill>
      <Nav.Item>
        <Nav.Link href="/">About</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/previous-work">Previous Work</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/projects">Projects</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/contact">Contact</Nav.Link>
      </Nav.Item>
    </Nav>
  )
}
