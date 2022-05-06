import React from "react";

export default function Comments() {
  return (
    <>
      <h3 className='comments_h3'>What they say about ICONICLI</h3>
      <div className='comments'>
        <div>
          <div className='comments_model'>
            <div>
              <img
                className='comments_img'
                src={require("../images/man.jpg")}
                alt='model'
              />
            </div>
            <div>
              <h6 className='comments_h6'>KAI, 31</h6>
              <div className='comments_p'>
                <p style={{ fontSize: 16, color: "#1F0045;" }}>
                  Freelance photographer
                </p>
                <br />
                <p>
                  “Saved the day, again and again! Booking the right profile has
                  never been this fast, affordable and effortless!”
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className='comments_model'>
            <div>
              <img
                className='comments_img'
                src={require("../images/women.jpg")}
                alt='model'
              />
            </div>
            <div>
              <h6 className='comments_h6'>EMELIE, 25</h6>
              <div className='comments_p' style={{ width: 230 }}>
                <p style={{ fontSize: 16, color: "#1F0045;" }}>MODEL</p>
                <br />
                <p>
                  “I’m so grateful for the career opportunities that have been
                  possible thanks to ICONICLI”
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
