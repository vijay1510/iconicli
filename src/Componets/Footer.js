import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import YouTubeIcon from "@mui/icons-material/YouTube";

export default function Footer() {
  return (
    <>
      <div id='contact' className='footer'>
        <div className='footer_flex'>
          <div>
            <p style={{ marginBottom: 5 }}>Contact</p>
            <p style={{ marginBottom: 20, color: "#ffffff" }}>
              info@iconicli.com
            </p>
            <div className='footer_icons' style={{ marginBottom: 25 }}>
              <FacebookIcon style={{ marginRight: 8 }} />
              <InstagramIcon style={{ marginRight: 8 }} />
              <TwitterIcon style={{ marginRight: 8 }} />
              <WhatsAppIcon style={{ marginRight: 8 }} />
              <YouTubeIcon />
            </div>
            <p>Terms & conditions</p>
          </div>
          <div>
            <h3 className='footer_name'>ICONICLI</h3>
            <h6 className='footer_h6'>THE ONE FOR ALL</h6>
            <p style={{ marginTop: 35 }}>© 2022 ICONICLI AKTIEBOLAG</p>
          </div>
          <div>
            <p style={{ textAlign: "end", marginBottom: 6 }}>Address</p>
            <p style={{ color: "#ffffff" }}>
              Sågargatan 10B, 75318 Uppsala, Sweden
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
