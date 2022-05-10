import React from "react";

export default function About() {
  return (
    <div id='about'>
      <h2 className='about_h2'>What is ICONICLI?</h2>
      <div className='about_flex'>
        <div>
          <img
            className='about_img'
            src={require("../images/table.jpg")}
            alt='photoshhot'
          />
          <div className='about_button'>
            <button className='about_btn'>&#60;</button>
            <button className='about_btn'>&#62;</button>
            <span className='about_dot'>....</span>
          </div>
        </div>
        <div className='about_mobile_div'>
          <h3 className='about_h3'>Online service for models and brands</h3>
          <div className='about_p'>
            <p>
              ICONICLI is a digital service that connects freelancing models
              with brands worldwide.
            </p>

            <br />
            <p>
              It’s an ALL IN ONE service for finding and booking diverse models
              from a huge database of profile, wherever and whenever needed.
            </p>
            <br />
            <p>
              The service is build with cutting edge technology to make your
              workflow as effortless as possible.
            </p>
            <br />
            <p>No more paperwork, exaggerated fees, and stressful deadlines!</p>
          </div>
        </div>
      </div>
      <p className='main_dot'>............................</p>
    </div>
  );
}
