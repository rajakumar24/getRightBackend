import React from "react";
import { Link } from "react-router-dom";
import QuestionPage from "./QuestionPage";
//import { TextArea } from "../../../components/";QuesPage
import QuesPage from "./QuestionPages";
import { CardSix } from "../../../components";
import "./PropertyDetailUI.css";

class PropertyDetailUI extends React.Component {
  render() {
    const {
      // _id,
      title,
      imgUrl,
      address,
      price,
      status,
      area,
      beds,
      baths,
      garages,
      description,
      features,
      question,
      answer,
      approve,
      // lat,
      // lng,
      country,
      state,
      city,
      zip,
      propertyType,
    } = this.props.property;

    let renderContent;
    const { _id, email, name } = this.props.property.user;
    console.log("puppy", this.props);
    const { about, mobile, skype } = this.props.agent;
    // const { img } = this.props.agent.imgUrl;
    console.log("puppyagent", this.props.agent);
    let statusColor = status === "rent" ? "warning" : "success";

    renderContent = (
      <React.Fragment>
        <div className="property">
          <div className="property__container">
            <div className="property__containerItem">
              <p className="property__title">{title}</p>
              <p className="property__address">{address}</p>
              <p className="property__address">{description}</p>
            </div>

            {/* <div className="property__containerItemaddress">
              <p className="property__address">{address}</p>
            </div> */}
            <div className="property__containerItemPrice">
              <p className="property__price">
                <small>&#8377;</small>
                <strong>{price} Lakhs</strong>
              </p>{" "}
              <p className="property__areaTitle">Area</p>
              <p className="property__area">
                {area} m<sup>2</sup>
              </p>
            </div>
          </div>

          <div className="property__containerDetail">
            <div className="property__containerImage">
              <img src={`http://localhost:3001/uploads/${imgUrl}`} alt="" />
            </div>
            <div className="property__containerImageRight">
              <div className="property__containerImageDetails">
                <p className="property__title">{title}</p>{" "}
                <div className="property__separator"></div>
                <div
                  className="property__columnPartion"
                  style={{ marginLeft: "35px", width: "25%" }}
                >
                  <div className="property__containerImageDetailsColumnOne">
                    <p className="property__detailsColumnOne">BHK</p>{" "}
                    <p className="property__detailsColumnTwo">1</p>{" "}
                  </div>
                  <div className="property__containerImageDetailsColumnOne">
                    <p className="property__detailsColumnOne">Price</p>{" "}
                    <p className="property__detailsColumnTwo">245 Lakhs</p>{" "}
                  </div>
                  <div className="property__containerImageDetailsColumnOne">
                    <p className="property__detailsColumnOne">Floor</p>{" "}
                    <p className="property__detailsColumnTwo">1/13</p>{" "}
                  </div>
                </div>
                <div
                  className="property__columnPartion"
                  style={{ marginLeft: "5px", width: "33%" }}
                >
                  <div className="property__containerImageDetailsColumnOne">
                    {" "}
                    <p className="property__detailsColumnOne">Area</p>{" "}
                    <p className="property__detailsColumnTwo">650-767 sq.ft.</p>{" "}
                  </div>
                  <div className="property__containerImageDetailsColumnOne">
                    {" "}
                    <p className="property__detailsColumnOne">
                      Property Type
                    </p>{" "}
                    <p className="property__detailsColumnTwo">Apartment</p>{" "}
                  </div>
                  <div className="property__containerImageDetailsColumnOne">
                    {" "}
                    <p className="property__detailsColumnOne">Parking</p>{" "}
                    <p className="property__detailsColumnTwo">Bika And Car</p>{" "}
                  </div>
                  <div className="property__containerImageDetailsColumnOne">
                    {" "}
                    {/* <p className="property__detailsColumnOne">Parking</p>{" "}
                  <p className="property__detailsColumnTwo">Bika And Car</p>{" "} */}
                  </div>
                  {/* <div className="property__containerImageDetailsColumnOne">
                  {" "}
                  <p className="property__detailsColumnTwo">
                    Bika And Car
                  </p>{" "}
                </div> */}
                </div>
                <div
                  className="property__columnPartion"
                  style={{ marginLeft: "25px", width: "30%" }}
                >
                  <div className="property__containerImageDetailsColumnOne">
                    {" "}
                    <p className="property__detailsColumnOne">Posted On</p>{" "}
                    <p className="property__detailsColumnTwo">Jan-2021</p>{" "}
                  </div>
                  <div className="property__containerImageDetailsColumnOne">
                    {" "}
                    <p className="property__detailsColumnOne">
                      Possession
                    </p>{" "}
                    <p className="property__detailsColumnTwo">Immediately</p>{" "}
                  </div>
                  <div className="property__containerImageDetailsColumnOne">
                    {" "}
                    <p className="property__detailsColumnOne">
                      Furnishing
                    </p>{" "}
                    <p className="property__detailsColumnTwo">Semi</p>{" "}
                  </div>
                </div>
              </div>
              {/* <div className="property__containerImageDetailsColumnOne">
                <p className="property__detailsAmenities">Amenities</p>{" "}
              </div>
              <div className="property__containerImageDetailsColumnOne">
                <p className="property__detailsColumnTwo">CCTV Cameras</p>{" "}
              </div> */}
              {/* <div className="property__columnPartion"> */}
              <div className="property__amenitiesContainer">
                <p
                  className="property__detailsAmenities"
                  style={{ marginLeft: "20px" }}
                >
                  Amenities
                </p>{" "}
                <div
                  className="property__separator"
                  style={{ marginLeft: "40px" }}
                ></div>
                <div
                  className="property__rowPartion"
                  style={{ marginLeft: "18px" }}
                >
                  <div
                    className="property__columnPartion"
                    style={{
                      marginLeft: "28px",
                      justifyContent: "space-between",
                    }}
                  >
                    {/* <img
                    className="property__imageIcon"
                    style={{ marginLeft: "10px" }}
                    src="../images/bed.png"
                    alt=""
                  /> */}
                    <p
                      className="property__detailsColumnTwo"
                      style={{ marginRight: "25px" }}
                    >
                      Lift
                    </p>{" "}
                    <p
                      className="property__detailsColumnTwo"
                      style={{ marginRight: "25px" }}
                    >
                      Maintence Staff
                    </p>{" "}
                    <p
                      className="property__detailsColumnTwo"
                      style={{ marginRight: "25px" }}
                    >
                      Gym
                    </p>{" "}
                  </div>
                  <div
                    className="property__columnPartion"
                    style={{
                      marginLeft: "28px",
                      justifyContent: "space-between",
                    }}
                  >
                    <p
                      className="property__detailsColumnTwo"
                      //style={{ marginRight: "25px" }}
                    >
                      Community
                    </p>{" "}
                    <p
                      className="property__detailsColumnTwo"
                      //style={{ marginRight: "25px" }}
                    >
                      Car Parking
                    </p>{" "}
                    <p
                      className="property__detailsColumnTwo"
                      style={
                        {
                          //  marginRight: "25px",
                        }
                      }
                    >
                      Maintence Staff
                    </p>{" "}
                  </div>
                  <div
                    className="property__columnPartion"
                    style={{
                      marginLeft: "28px",
                      justifyContent: "space-between",
                    }}
                  >
                    <p
                      className="property__detailsColumnTwo"
                      style={{ marginRight: "25px" }}
                    >
                      Play Area
                    </p>{" "}
                    <p
                      className="property__detailsColumnTwo"
                      style={{ marginRight: "25px" }}
                    >
                      24hrs Water Supply
                    </p>{" "}
                    <p
                      className="property__detailsColumnTwo"
                      style={{ marginRight: "25px" }}
                    >
                      Compound
                    </p>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="property__add">
            <img
              src="https://s0.2mdn.net/9141080/BPS-Campaign-728x90_Dv360_Rev.png"
              border="0"
              width="970"
              height="90"
              alt=""
              class="img_ad"
            />
          </div>
          <div className="property__agent">
            <p className="mt-3 ml-5 pb-3">
              <strong>Owner:</strong>
            </p>
            <div className="pl-3 pt-2 pr-2 pb-2 w-75 border-left">
              <h4 className="name text-primary">{name}</h4>
              <p className="lead">{about}</p>
              <ul className="agent-details list-group">
                <li className="list-group-item">
                  Phone: <span className="float-right">(123) 456 789</span>
                </li>
                <li className="list-group-item">
                  Mobile: <span className="float-right">{mobile}</span>
                </li>
                <li className="list-group-item">
                  Email: <span className="float-right">{email}</span>
                </li>
                <li className="list-group-item">
                  Skype: <span className="float-right">{skype}</span>
                </li>
              </ul>
              <Link
                to={`/agent-profile/${_id}`}
                className="text-right mt-4 btn btn-primary"
              >
                <i className="fa fa-user" /> View Profile
              </Link>
            </div>
          </div>
        </div>
      </React.Fragment>
    );

    return <React.Fragment>{renderContent}</React.Fragment>;
  }
}

export default PropertyDetailUI;
