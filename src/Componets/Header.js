import React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className='header'>
        <Link to='/'>
          <h1 className='header_logo'>ICONICLI</h1>
        </Link>

        <nav className='header_nav'>
          <li>BENEFITS</li>
          <li>
            <a href='#pricing'>PRICING</a>
          </li>
          <li>
            <a href='#working'>HOW IT WORKS</a>
          </li>
          <li>FAQ</li>
          <li>
            <a href='#about'>ABOUT</a>
          </li>
          <li>
            <a href='#contact'>CONTACT</a>
          </li>
        </nav>
        <div className='header_button'>
          <Link to='/login'>
            <button className='header_btn'>Log in</button>
          </Link>

          <button className='header_btn  mobile'>Sign up</button>
        </div>
        <div className='header_menu'>
          <ToggleButton value='justify' aria-label='justified' disabled>
            <FormatAlignJustifyIcon />
          </ToggleButton>
        </div>
      </header>
    </>
  );
}
