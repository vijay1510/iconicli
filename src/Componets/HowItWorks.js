import React from "react";

export default function HowItWorks() {
  return (
    <div id='working'>
      <h2 className='work_h2'>How it works</h2>
      <div className='work_div'>
        <img
          className='work_img'
          src={require("../images/diagram.png")}
          alt='working'
        />
      </div>

      <p className='main_dot'>............................</p>
      {/* <div className='works'>
        <div className='circle'>client</div>
        <hr />
        <div className='box'>Register an account</div>
        <div className='box'>Build your profile</div>
        <div className='box'>Create job</div>
        <div className='box'>Book</div>
      </div> */}
    </div>
  );
}
