
import { Container } from "react-bootstrap"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import Navbar from "./components/navbar"
import About from "./routes/About"
import Contact from "./routes/Contact"
import Experience from "./routes/Experience"
import Projects from "./routes/Projects"
import Volunteering from "./routes/Volunteering"

import "bootstrap/dist/css/bootstrap.min.css"
import "./app.css"

export default function App() {
  return (
    <Container>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="experience" element={<Experience />} />
          <Route path="projects" element={<Projects />} />
          <Route path="volunteering" element={<Volunteering />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </Container>
  )
}
