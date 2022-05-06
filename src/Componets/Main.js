import React from "react";

export default function Main() {
  return (
    <>
      <div className='main'>
        <div>
          <h3 className='main_h3'>Find and book diverse models near you!</h3>
          <p className='main_p1' style={{ color: "#1F0045" }}>
            Join our community of models and brands, and start collaborating
            with diverse models to bring out the full potential of your brand!
          </p>
          <p className='main_p2'>
            Modeling and booking models has never been this easy!
          </p>
          <button className='main_btn'>CREATE AN ACCOUNT</button>
        </div>
        <div>
          <img
            className='main_img'
            src='https://r8p5t3k3.stackpathcdn.com/wp-content/uploads/2021/01/pexels-ahmed-satti-3223552-scaled.jpg'
            alt='model'
          />
        </div>
      </div>
      <p className='main_dot'>............................</p>
    </>
  );
}
