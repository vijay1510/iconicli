import React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";

export default function Header() {
  return (
    <>
      <header className='header'>
        <h1 className='header_logo'>ICONICLI</h1>
        <nav className='header_nav'>
          <li>
            <a href='#'>BENEFITS</a>
          </li>
          <li>
            <a href='#'>PRICING</a>
          </li>
          <li>
            <a href='#'>HOW IT WORKS</a>
          </li>
          <li>
            <a href='#'>FAQ</a>
          </li>
          <li>
            <a href='#about'>ABOUT</a>
          </li>
          <li>
            <a href='#'>CONTACT</a>
          </li>
        </nav>
        <div className='header_button'>
          <button className='header_btn'>Log in</button>
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
