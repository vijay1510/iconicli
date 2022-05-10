import React from "react";
import TransgenderIcon from "@mui/icons-material/Transgender";

export default function Join() {
  return (
    <>
      <h3 className='join_h3'>Why you should join ICONICLI</h3>
      <div className='join'>
        <div>
          <h6 className='join_h6'>For models</h6>
          <div className='join_model'>
            <div>
              <img
                className='join_img'
                src={require("../images/t-shirt.jpg")}
                alt='model'
              />
            </div>
            <div>
              <h6 className='join_work'>WORK WITH CLIENTS WORLDWIDE</h6>
              <div className='join_p'>
                <p style={{ fontSize: 12 }}>
                  Our clients come from all around the globe.
                </p>
                <br />
                <p>
                  You can apply to jobs near your or on the other side of the
                  planet.
                </p>
                <br />
                <p>The choice is always yours</p>
              </div>
            </div>
          </div>
          <p className='join_dot'>.......</p>
        </div>
        <div>
          <h6 className='join_h6'>FOR CLIENTS</h6>
          <div className='join_model'>
            <div>
              <img
                className='join_img'
                src={require("../images/bikini.jpg")}
                alt='model'
              />
            </div>
            <div>
              <h6 className='join_work'>AFFORDABLE, DON’T SPEND MORE</h6>
              <div className='join_p' style={{ width: 230 }}>
                <p style={{ fontSize: 12 }}>
                  Thanks to an automation and digitalization, booking models to
                  create first class content, is now possible to smaller brands
                  and start-ups.
                </p>
                <br />
                <p>Get the most out of your resources.</p>
              </div>
            </div>
          </div>
          <p className='join_dot'>.......</p>
        </div>
      </div>
      <div className='join_details'>
        <p className='join_bigger' style={{ color: "#1F0045" }}>
          BE PART OF SOMETHING BIGGER!
        </p>
        <p className='join_support' style={{ color: "#1f0045" }}>
          By using and supporting ICONICLI, you will automatically contributing
          to, and be part of a higher purpose! We strive to make a better world
          by supporting 3 of the 17 Global Goals for 2030, which are connected
          to the modeling, marketing and media industry.
        </p>
      </div>
      <div className='join_gender'>
        <div className='join_gender_mobile'>
          <TransgenderIcon
            style={{
              width: 60,
              height: 60,
              borderRadius: "100%",
              backgroundColor: "#1F0045",
              color: "white",
              padding: 10,
            }}
          />
          <hr className='join_hr'></hr>

          <p style={{ width: 100, height: 60 }} className='join_mobile_pr'>
            GENDER EQUALITY
          </p>
        </div>
        <div className='join_gender_mobile'>
          <TransgenderIcon
            style={{
              width: 60,
              height: 60,
              borderRadius: "100%",
              backgroundColor: "#1F0045",
              color: "white",
              padding: 10,
              border: "none",
            }}
          />
          <hr className='join_hr' style={{}}></hr>
          <p
            style={{ width: 180, height: 60 }}
            className='join_mobile_pr growth'></p>
        </div>
        <div className='join_gender_mobile'>
          <TransgenderIcon
            style={{
              width: 60,
              height: 60,
              borderRadius: "100%",
              backgroundColor: "#1F0045",
              color: "white",
              padding: 10,
              border: "none",
            }}
          />
          <hr className='join_hr'></hr>
          <p style={{ width: 140, height: 60 }} className='join_mobile_pr'>
            REDUCED INEQUALITIES
          </p>
        </div>
      </div>
      <p className='main_dot'>............................</p>
    </>
  );
}
