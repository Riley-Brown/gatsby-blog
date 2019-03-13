import React from "react"
import { Link } from "gatsby"
import "./navbar.css"

const Navbar = () => (
  <div className="navbar">
    <div className="nav-container">
      <div className="nav-logo">
        <Link to="/">Riley Brown</Link>{" "}
      </div>
      <div className="nav-items">
        <Link to="/">Home</Link>
        <a href="https://riley.gg" target="_blank">
          My Website
        </a>
        <a href="https://github.com/Riley-Brown" target="_blank">
          GitHub
        </a>
        <a href="https://twitter.com/RileyB_96" target="_blank">
          Twitter
        </a>
      </div>
    </div>
  </div>
)

export default Navbar
