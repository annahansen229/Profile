import React from "react"

import { BrowserRouter, Routes, Route } from "react-router-dom"

import About from "./routes/About"
import Experience from "./routes/Experience"
import Projects from "./routes/Projects"
import Contact from "./routes/Contact"
import Navbar from "./components/navbar"

import "./app.css"
import "bootstrap/dist/css/bootstrap.min.css"

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="experience" element={<Experience />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
