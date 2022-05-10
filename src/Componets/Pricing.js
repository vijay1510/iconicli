import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import PersonIcon from "@mui/icons-material/Person";
import GroupsIcon from "@mui/icons-material/Groups";

export default function Pricing() {
  const [clicked, setClicked] = useState(true);
  const [click, setClick] = useState(true);
  const isMobile = useMediaQuery({ query: `(max-width: 830px)` });

  useEffect(() => {
    console.log(isMobile);
    if (!isMobile) {
      setClicked(false);
      setClick(false);
    }
    if (isMobile) {
      setClick(true);
      setClicked(false);
    }
  }, [isMobile]);

  return (
    <div className='pricing_main'>
      <h3 id='pricing' className='pricing_h3'>
        Pricing
      </h3>
      <div className='pricing_mobile'>
        <button
          className='pricing_mobile_model'
          // eslint-disable-next-line
          onClick={() => (setClicked(false), setClick(true))}>
          Models
          <span style={{ position: "relative", top: 3.5 }}>
            <GroupsIcon
              style={{
                border: "1px solid #8C52FF",
                width: 45,
                height: 30,
                fontSize: 30,
                borderRadius: 8,
                marginLeft: 8,
                padding: 1,
                color: clicked ? "#8C52FF" : "#fff",
                backgroundColor: clicked ? "#fff" : "#8C52FF",
              }}
            />
          </span>
        </button>

        <button
          className='pricing_mobile_model'
          // eslint-disable-next-line
          onClick={() => (setClick(false), setClicked(true))}>
          Clients
          <span style={{ position: "relative", top: 3.5 }}>
            <PersonIcon
              style={{
                border: "1px solid #8C52FF",
                width: 45,
                height: 30,
                fontSize: 30,
                borderRadius: 8,
                marginLeft: 8,
                padding: 1,
                color: click ? "#8C52FF" : "#fff",
                backgroundColor: click ? "#fff" : "#8C52FF",
              }}
            />
          </span>
        </button>
      </div>
      <div className='pricing'>
        <div
          className='pricing_model_display'
          style={{ display: !clicked ? "block" : "none" }}>
          <div className='pricing_icon'>
            <GroupsIcon
              fontSize='large'
              style={{ marginLeft: 95, color: "#1F0045" }}
            />
          </div>

          <h6 className='pricing_model'>For models</h6>
          <hr className='pricing_hr'></hr>
          <p className='pricing_charge'>20%</p>
          <p className='pricing_model_price'>
            ICONICLI charge models 20% of the job payment amount
          </p>
        </div>
        <div
          className='pricing_client_display'
          style={{ display: !click ? "block" : "none" }}>
          <div className='pricing_icon'>
            <PersonIcon
              fontSize='large'
              style={{ marginLeft: 95, color: "#1F0045" }}
            />
          </div>

          <h6 className='pricing_client'>For Clients</h6>
          <hr className='pricing_hr'></hr>
          <p className='pricing_charge'>3%</p>
          <p className='pricing_clients_price'>
            ICONICLI charges clients 3% of the job payment amount, as a payment
            transfer fee
          </p>
        </div>
      </div>
      <p className='main_dot'>............................</p>
    </div>
  );
}
