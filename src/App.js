import React from "react"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"

import About from "./routes/About"
import Experience from "./routes/Experience"
import Projects from "./routes/Projects"
import Contact from "./routes/Contact"
import Navbar from "./components/navbar"

import "./app.css"
import "bootstrap/dist/css/bootstrap.min.css"

export default function App() {
  return (
    <Container>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="experience" element={<Experience />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </Container>
  )
}
