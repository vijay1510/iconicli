import React from "react";
import GoogleIcon from "@mui/icons-material/Google";

import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";

export default function Login() {
  return (
    <>
      <div className='login'>
        <div>
          <div className='login_blur'></div>
          <h2 className='login_h2'>Log in to continue the journey </h2>
          <p className='login_p'>
            If you are not a member yet, you can sign up here!
          </p>
        </div>
        <div className='login_form'>
          <input type='text' placeholder='Enter Email' />
          <br></br>
          <input type='password' placeholder='Password' />
          <p className='login_forgot'>Forgot your password?</p>
          <button className='login_btn'>Log In</button>
          <p className='login_other'>
            <span>
              <hr className='login_hr'></hr>
            </span>
            <span style={{ position: "relative", top: 5, opacity: "0.3" }}>
              {" "}
              or continue with{" "}
            </span>
            <span>
              <hr className='login_hr'></hr>
            </span>
          </p>
          <button className='login_google'>
            <span>
              <GoogleIcon style={{ marginRight: 19, marginLeft: 5 }} />
            </span>
            <span style={{ position: "relative", top: -8 }}>
              Log in with Google
            </span>
          </button>
          <button className='login_facebook'>
            <span>
              <FacebookOutlinedIcon
                style={{ marginRight: 19, marginLeft: 5 }}
              />
            </span>
            <span style={{ position: "relative", top: -8 }}>
              Log in with Facebook
            </span>
          </button>
        </div>
      </div>
    </>
  );
}
