import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../../store/actions";
import { GoogleMap, CardOne } from "../../../components";
import { Spinner } from "reactstrap";
import { CardSix } from "../../../components";
import { Grid } from "phoenix-component-2.0";
import SearchIcon from "@material-ui/icons/Search";
import ApartmentIcon from "@material-ui/icons/Apartment";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import ReceiptIcon from "@material-ui/icons/Receipt";
//
import "./HomePage.css";
import ImageSlider from "./ImageSlider";

class HomePage extends React.Component {
  componentDidMount() {
    this.props.getAllProperties(1, 10, "all");
  }

  render() {
    let renderComponent;
    const { properties } = this.props.property;

    if (properties === null || Object.keys(properties).length === 0) {
      renderComponent = (
        <div
          style={{ width: "100%", height: "100vh" }}
          className="d-flex align-items-center justify-content-center"
        >
          <Spinner color="primary" />
        </div>
      );
    }
    if (properties.length > 0) {
      renderComponent = properties.slice(0, 3).map((property) => {
        if (property.approve === "Approved") {
          return (
            <div key={property._id}>
              <CardOne
                propertyId={property._id}
                img={property.imgUrl}
                title={property.title}
                description={property.description}
                price={property.price}
                area={property.area}
                beds={property.beds}
                baths={property.baths}
                garages={property.garages}
                btnText="View Details"
              />
            </div>
          );
        } else {
          // return (null);
          return (
            <div key={property._id} className="col-lg-4 col-md-6 col-sm-12 ">
              <CardSix
                id={property._id}
                title={property.title}
                imgUrl={property.imgUrl}
                price={property.price}
                address={property.address}
                description={property.description}
                // lat={lat}
                // lng={lng}
                country={property.country}
                state={property.state}
                city={property.city}
                zip={property.zip}
                propertyType={property.propertyType}
                status={property.status}
                beds={property.beds}
                baths={property.baths}
                area={property.area}
                approve={property.approve}
                question={property.question}
                answer={property.answer}
                garages={property.garages}
                ac={property.features.ac}
                gym={property.features.gym}
                bar={property.features.bar}
                internet={property.features.internet}
                microwave={property.features.microwave}
                smoking={property.features.smoking}
                fireplace={property.features.fireplace}
                toaster={property.features.toaster}
                tennis={property.features.tennis}
                tv={property.features.tv}
                // features={features}
              />
            </div>
          );
        }
      });
    }

    return (
      <React.Fragment>
        {/* <GoogleMap width="100%" height="80vh" /> */}
        <div className="home">
          <div className="home__container">
            <img className="home__image" src="./images/property5.jpg" alt="" />

            <div className="home_imageCardContainer">
              <div className="home_imageCardContainerOne">
                <Grid container>
                  {/* <Grid item xs={12} sm={12} md={3}></Grid> */}
                  <Grid item xs={12} sm={12} md={12}>
                    <div className="home_imageTextContainer">
                      <p className="home_imageText">
                        Find Your Dream Home With Us!!
                      </p>
                    </div>
                    <div className="header__search">
                      <input
                        className="header__searchInput"
                        type="text"
                        placeholder="Enter localities or landmarks here"
                      />
                      <div className="header__searchIcon">
                        <SearchIcon className="header__searchIconSetting" />
                        Search
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </div>
              <div className="home_imageCardContainerTwo">
                <Grid container>
                  <Grid item xs={12} sm={12} md={12}>
                    <div className="home_list">
                      <div className="home_listItem">
                        <span className="home_listItemTitle">
                          We Offer 3 Simple Steps.
                        </span>
                      </div>

                      <div className="home_listItemContainer">
                        <Grid container>
                          <Grid item xs={4} sm={4} md={4}>
                            <div
                              className="home_listItemIcons"
                              // style={{ paddingLeft: "25px" }}
                            >
                              <ApartmentIcon className="home_listItemIcon" />
                              <span className="home_listItemSubTitle">
                                Post/Search
                              </span>
                            </div>
                          </Grid>
                          <Grid item xs={4} sm={4} md={4}>
                            <div className="home_listItemIcons">
                              <SupervisorAccountIcon className="home_listItemIcon" />
                              <span className="home_listItemSubTitle">
                                Visit/Connect
                              </span>
                            </div>
                          </Grid>
                          <Grid item xs={4} sm={4} md={4}>
                            <div className="home_listItemIcons">
                              <ReceiptIcon className="home_listItemIcon" />
                              <span className="home_listItemSubTitle">
                                Sell/Register
                              </span>
                            </div>
                          </Grid>
                        </Grid>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </div>

              {/* <div className="home__rowOne"> */}
              <div className="home__rowHeader">
                <div className="home__rowTitleLine">Trending</div>
                {/* <div>
                    <span
                      className="home__rowTitle"
                    >
                      
                    </span>
                  </div>

                  <div className="home__rowTitleLine"></div> */}
              </div>
              {/* </div> */}
            </div>

            {/* <div className="home__row"> */}
            <div className="row  m-auto">{renderComponent}</div>

            <div className="home__moreProperty">
              <Link to="/properties-list" className="home__morePropertyButton">
                More Properties
              </Link>
            </div>
            {/* </div> */}
            <div className="home__add">
              <img
                src="https://tpc.googlesyndication.com/simgad/2963222261425929345"
                border="0"
                width="970"
                height="90"
                alt=""
                class="img_ad"
              />
            </div>
            <div className="cardsix">
              <CardSix />
            </div>
          </div>
        </div>

        {/* <div className="body">
          <div className="body1">
            <ImageSlider width="100%" height="40vh" />
          </div>
          <div className="body2">
            <div className="body3">
              <CardSix />
            </div>
            <div className="container py-5" style={styles.common}>
              <h1 className="display-4 mb-5 text-center">Properties...</h1>
              <div className="row  m-auto">{renderComponent}</div>
              <div className="text-center my-5">
                <Link to="/properties-list" className="btn btn-primary mt-3">
                  More Properties
                </Link>
              </div>
            </div>
          </div>
        </div> */}
      </React.Fragment>
    );
  }
}

const styles = {
  common: {
    height: "100vh",
  },
};

const mapStateToProps = (state) => {
  return {
    property: state.property,
  };
};

export default connect(mapStateToProps, actions)(HomePage);
