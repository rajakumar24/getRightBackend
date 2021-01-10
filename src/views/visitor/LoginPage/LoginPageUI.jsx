import React from "react";
// import ForgetPassword from '../forgetpassword';
import { NavLink } from "react-router-dom";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";

const LoginPageUI = (props) => {
  return (
    <div className="login">
      <div className="login__logo">
        <span style={{ color: "yellow", marginTop: "0px" }}>Ge</span>
        <span className="header_name">tRightProperty.Com</span>
      </div>
      <div className="login__container">
        <h1>Sign-in</h1>
        <form onSubmit={props.onFormSubmit}>
          <div>{props.children}</div>
          <button
            // type="submit"
            // onClick={signIn}
            className="login__signInButton"
          >
            Sign In
          </button>
        </form>
        <div className="login__footer">
          <Link
            style={{
              marginLeft: "0px",
              marginTop: "25px",
              color: "black",
              fontWeight: "500",
            }}
            to="/forget-password"
          >
            ForgetPassword?
          </Link>
          <Link
            style={{
              marginLeft: "20px",
              marginTop: "25px",
              color: "black",
              fontWeight: "500",
            }}
            to="/registration"
          >
            Create your Account
          </Link>
        </div>
      </div>
    </div>

    //   <div className="row my-5">
    //     <div className="col-lg-4 col-md-6 col-sm-8 offset-md-4 offset-sm-2 border p-3 pb-4">
    //       <form onSubmit={props.onFormSubmit}>
    //         <div className="title text-center display-4">Login</div>
    //         {props.children}
    //         <div className="form-group">
    //           <button className="btn btn-primary btn-block">Login</button>
    //         </div>
    //       </form>
    //       <NavLink className="nav-item nav-link" to="/forget-password">
    //       ForgetPassword?
    //     </NavLink>
    //     </div>

    //   </div>

    // </div>
    //  <NavLink className="nav-item nav-link" to="/forget-password">
    //     ForgetPassword
    //   </NavLink>
  );
};

export default LoginPageUI;
