import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import GroupsIcon from "@mui/icons-material/Groups";

export default function Pricing() {
  return (
    <>
      <h3 id='pricing' className='pricing_h3'>
        Pricing
      </h3>
      <div className='pricing'>
        <div>
          <GroupsIcon fontSize='large' style={{ marginLeft: 95 }} />
          <h6 className='pricing_model'>For models</h6>
          <hr className='pricing_hr'></hr>
          <p className='pricing_charge'>20%</p>
          <p className='pricing_model_price'>
            ICONICLI charge models 20% of the job payment amount
          </p>
        </div>
        <div>
          <PersonIcon fontSize='large' style={{ marginLeft: 95 }} />
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
    </>
  );
}
