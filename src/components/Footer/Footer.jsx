import React from "react";
import "./Footer.css";
import { Link, withRouter } from "react-router-dom";
import HomeWorkIcon from "@material-ui/icons/HomeWork";
import { Grid } from "phoenix-component-2.0";

const Footer = (props) => {
  return (
    <div className="footer">
      <div className="footer__containerOne">
        <div className="footer__containerImage">
          <img src="./images/property7.jpg" alt="" />
        </div>
      </div>
      <div className="footer__containerTwo">
        {" "}
        <div className="footer__titleOneOption">
          <div className="footer__titleOneHeader">
            <p className="header__logo">
              {/* <HomeWorkIcon style={{ color: "yellow" }} />{" "} */}
              {/* <span style={{ color: "yellow", marginTop: "0px" }}>Ge</span> */}
              <span
                className="header__logoItem"
                style={{ marginLeft: "20px", marginRight: "20px" }}
              >
                Rent/Sale Flats{" "}
              </span>
            </p>
          </div>
          <div style={{ marginLeft: "40px" }}>
            <p className="header__logoItemPart">Bagalore</p>
            <p className="header__logoItemPart">Mumbai</p>
            <p className="header__logoItemPart">Kolkata</p>
            <p className="header__logoItemPart">Patna</p>
            <p className="header__logoItemPart">Delhi</p>
          </div>
        </div>
        <div className="footer__titleTwoOption">
          <p className="header__logoItem">PG/Flatmates</p>
          <p className="header__logoItemPart">Contact Us</p>
          <p className="header__logoItemPart">Corporate Enquiry</p>
          <p className="header__logoItemPart">Media</p>
          <p className="header__logoItemPart">Youtube</p>
          <p className="header__logoItemPart">Medium</p>
        </div>
        <div className="footer__titleTwoOption">
          <p className="header__logoItem">PG/Flatmates</p>
          <p className="header__logoItemPart">Contact Us</p>
          <p className="header__logoItemPart">Corporate Enquiry</p>
          <p className="header__logoItemPart">Media</p>
          <p className="header__logoItemPart">Youtube</p>
          <p className="header__logoItemPart">Medium</p>
        </div>
        {/* </Grid>
          <Grid item xs={6} sm={6} md={5}> */}
        <div className="footer__titleTwoOption">
          <p className="header__logoItem">PG/Flatmates</p>
          <p className="header__logoItemPart">Contact Us</p>
          <p className="header__logoItemPart">Corporate Enquiry</p>
          <p className="header__logoItemPart">Media</p>
          <p className="header__logoItemPart">Youtube</p>
          <p className="header__logoItemPart">Medium</p>
        </div>
        <div className="footer__titleTwoOption">
          <p className="header__logoItem">Commercial</p>
          <p className="header__logoItemPart">Share On Facebook</p>
          <p className="header__logoItemPart">Share on Twitter</p>
          <p className="header__logoItemPart">Share on Instagram</p>
        </div>
      </div>
      <div className="footer__containerThree">
        {/* <Grid container>
          <Grid item xs={6} sm={6} md={7}> */}
        <div className="footer__titleOne">
          <div className="footer__titleOneHeader">
            <p className="header__logo">
              {/* <HomeWorkIcon style={{ color: "yellow" }} />{" "} */}
              <span style={{ color: "yellow", marginTop: "0px" }}>Ge</span>
              <span className="header_name">tRightProperty.Com</span>
            </p>
          </div>
          <p
            className="header__logoItemPart"
            style={{ marginLeft: "20px", marginRight: "20px" }}
          >
            GetRightProperty is a new home rental platform that makes it easier
            to find your new home without paying any brokerage. Use our verified
            listing to ensure you find your dream home by contacting the owners
            directly. In case you cannot find a property you are looking for,
            please post a requirement and we'll send you email notification with
            properties matching your requirements.
          </p>
        </div>
        {/* </Grid>
          <Grid item xs={6} sm={6} md={5}> */}
        <div className="footer__titleTwo">
          <p className="header__logoItem">Contact Us</p>
          <p className="header__logoItemPart">Contact Us</p>
          <p className="header__logoItemPart">Corporate Enquiry</p>
          <p className="header__logoItemPart">Media</p>
          <p className="header__logoItemPart">Youtube</p>
          <p className="header__logoItemPart">Medium</p>
        </div>
        <div className="footer__titleTwo">
          <p className="header__logoItem">Follow Us</p>
          <p className="header__logoItemPart">Share On Facebook</p>
          <p className="header__logoItemPart">Share on Twitter</p>
          <p className="header__logoItemPart">Share on Instagram</p>
        </div>
        {/* </Grid>
        </Grid> */}
      </div>
      <div className="footer__containerFour">
        <p style={{ marginTop: "10px" }}>
          &copy; Get right property 2020 All Rights Reserved
        </p>
      </div>
    </div>

    //       <div className="footerHead">
    //    <div className="footer">
    //  <div className="footer1">
    //    <h3><span style={{color:"yellow"}}>Ge</span><span className="container1">tRightProperty</span> </h3>
    //    <p className="CommonFamily">Find your dream home here!</p>
    //    </div>
    //    <div className="footer2">
    //    <h3 className="CommonFamily">Contact Us</h3>
    //    <div className="footer20">
    //    <p className="CommonFamily">Find your dream home here!</p>
    //    </div>
    //    </div>
    //    <div className="footer3">
    //    <h3 className="CommonFamily">Newsletter Subscribe</h3>
    //    <p className="CommonFamily">Find your dream home here!</p>
    //    </div>
    //    </div>
    //    <div className="footer4">
    //      <div className="footer5 CommonFamily"><p>&copy; Get right property 2020 All Rights Reserved</p></div>
    //    </div>
    //    </div>
  );
};
export default Footer;
