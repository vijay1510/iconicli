import React from "react";

export default function BookModels() {
  return (
    <>
      <h3 className='book_h3'>Book talented models instantly</h3>
      <h5 className='book_h5'>
        <span className='book_span'>3150</span> Profiles
      </h5>
      <div className='book'>
        <div>
          <img
            className='book_img'
            src={require("../images/model.jpg")}
            alt='model'
          />
          <div className='book_model_details'>
            <p>
              CAMILLA, 29
              <span>
                <button className='book_btn'>VIEW</button>
              </span>
            </p>
            <p>Stockholm, Sweden</p>
          </div>
        </div>
        <div>
          <img
            className='book_img'
            src={require("../images/model.jpg")}
            alt='model'
          />
          <div className='book_model_details'>
            <p>
              CAMILLA, 29
              <span>
                <button className='book_btn'>VIEW</button>
              </span>
            </p>
            <p>Stockholm, Sweden</p>
          </div>
        </div>
        <div>
          <img
            className='book_img'
            src={require("../images/model.jpg")}
            alt='model'
          />
          <div className='book_model_details'>
            <p>
              CAMILLA, 29
              <span>
                <button className='book_btn'>VIEW</button>
              </span>
            </p>
            <p>Stockholm, Sweden</p>
          </div>
        </div>
        <div>
          <img
            className='book_img'
            src={require("../images/model.jpg")}
            alt='model'
          />
          <div className='book_model_details'>
            <p>
              CAMILLA, 29
              <span>
                <button className='book_btn'>VIEW</button>
              </span>
            </p>
            <p>Stockholm, Sweden</p>
          </div>
        </div>
      </div>
      <p className='main_dot'>............................</p>
    </>
  );
}
