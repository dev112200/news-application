import React from 'react'
import style from './Navbar.module.css'
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className={style.navbar}>
        <h2>NewsNow</h2>
        <ul>
          <li>
            <Link to="/" className={style.linkstyle}>Home</Link>
          </li>
          <li>
            <Link to="/news" className={style.linkstyle}>News</Link>
          </li>
          <li>
            <Link to="/about" className={style.linkstyle}>About</Link>
          </li>
          <li>
            <Link to="/contact" className={style.linkstyle}>Contact</Link>
          </li>
        </ul>
    </div>
  )
}
