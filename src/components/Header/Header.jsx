import React from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import { NavLink, Link } from "react-router-dom";
import HomeWorkIcon from "@material-ui/icons/HomeWork";
import "./Header.css";

class Header extends React.Component {
  onlogoutClick = () => {
    this.props.clearCurrentUser();
    this.props.logoutUser();
  };

  render() {
    // const { name } = this.props.profileData.user;
    const authLinks = (
      <React.Fragment>
        <NavLink className="bg-warning nav-item nav-link" to="/agent/dashboard">
          <span style={{ color: "white", marginLeft: "5px" }}>Dashboard</span>
        </NavLink>
        <NavLink
          onClick={this.onlogoutClick}
          className="nav-item nav-link"
          to="/"
        >
          <span style={{ color: "white", marginLeft: "-10px" }}>Logout</span>
        </NavLink>
      </React.Fragment>
    );
    const guestLinks = (
      <React.Fragment>
        <NavLink className="nav-item nav-link" to="/registration">
          <span style={{ color: "white" }}>Register</span>
        </NavLink>
        <NavLink className="nav-item nav-link" to="/login">
          <span style={{ color: "white", marginLeft: "-13px" }}>Login</span>
        </NavLink>
      </React.Fragment>
    );

    return (
      <div className="header">
        <NavLink className="nav-link" to="/">
          <p className="header__logo">
            <HomeWorkIcon style={{ color: "yellow", marginTop: "-10px" }} />{" "}
            <span style={{ color: "yellow" }}>Ge</span>
            <span className="header_name">tRightProperty</span>
          </p>
        </NavLink>

        <div className="header__nav">
          <div style={{ marginTop: 5, marginLeft: 10 }}>
            <Link to="/home">
              <span className="header__optionLine">Home</span>
            </Link>{" "}
            <Link to="/properties-list">
              <span className="header__optionLine">Properties-list</span>
            </Link>
            <Link to="/about">
              <span className="header__optionLine">About</span>
            </Link>
            <Link to="/contact">
              <span className="header__optionLine">Contact</span>
            </Link>
          </div>
          <span className="header__optionAuth">
            {this.props.auth.isAuthenticated ? authLinks : guestLinks}
          </span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, actions)(Header);
