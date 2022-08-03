import React from "react"
import ReactDOM from "react-dom"

import { BrowserRouter, Routes, Route } from "react-router-dom"

import About from "./routes/About"
import PreviousWork from "./routes/PreviousWork"
import Projects from "./routes/Projects"
import Contact from "./routes/Contact"

const rootElement = document.getElementById("root")

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="about" element={<About />} />
      <Route path="previous-work" element={<PreviousWork />} />
      <Route path="projects" element={<Projects />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>,
  rootElement
)
