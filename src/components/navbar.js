import Nav from "react-bootstrap/Nav"
import { useState } from "react"

export default function Navbar() {
  const [key, setKey] = useState("about")

  return (
    <Nav
      fill
      variant="tabs"
      activeKey={key}
      onSelect={(k) => {
        console.log(k)
        setKey(k)
      }}
      className="justify-content-center d-flex flex-nowrap mb-2"
    >
      <Nav.Item>
        <Nav.Link href="/" eventKey="about">
          About
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/experience" eventKey="experience">
          Experience
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/projects" eventKey="projects">
          Projects
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/contact" eventKey="contact">
          Contact
        </Nav.Link>
      </Nav.Item>
    </Nav>
  )
}
