import React from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import * as actions from "../../../store/actions";
import { Link } from "react-router-dom";
import { TextArea, Input } from "../../../components";
import SelectList from "../../../components/FormElements/SelectList";
import { AgentMenu } from "..";
import { Spinner } from "reactstrap";
import AdminRedirect from "./AdminRedirect";
import { NavLink } from "react-router-dom";
//
import axios from "axios";
import { baseUrl } from "../../../baseURL/baseURL";
import Pusher from "pusher-js";
// import Spinner from 'react-spinkit';
import { Container, Row, Col } from "react-bootstrap";
import "./Adding.css";
//

class Dashboard extends React.Component {
  state = {
    btnName: "Please Verify Mobile",
    propertyCount: "",
    name: "",
    about: "",
    email: "",
    mobile: "",
    skype: "",
    website: "",
    address: "",
    country: "",
    facebook: "",
    twitter: "",
    linkedin: "",
    //
    images: [],
    selectedFile: null,
    loading: false,
    imgUrl: "",
    //
  };

  componentDidMount() {
    this.props.getCurrentProfile();
    //
    // this.setState({
    //   loading: true,
    // });

    // axios.get('http://localhost:3001/api/profile/imagePost').then(({ data }) => {
    //   this.setState({
    //     images: [...data, ...this.state.images],
    //     loading: false,
    //   });
    // });

    // const pusher = new Pusher('fafe4d5c56b45906d6fd', {
    //   cluster: 'ap2',
    //   encrypted: true,
    // });

    // const channel = pusher.subscribe('gallery');
    // channel.bind('upload', data => {
    //   this.setState({
    //     images: [data.image, ...this.state.images],
    //   });
    // });
    //

    if (!this.props.auth.isAuthenticated) {
      this.props.history.push("/login");
    }
  }

  componentWillUnmount() {
    this.props.clearError();
    this.props.clearProperty();
  }

  componentWillReceiveProps(nextProps) {
    if (Object.keys(nextProps.profile.profile).length > 0) {
      const profile = nextProps.profile.profile;

      this.setState({
        propertyCount: this.props.property.totalCount,
        name: this.props.auth.user.name,
        country: profile.country,
        address: profile.address,
        about: profile.about,
        email: this.props.auth.user.email,
        mobile: profile.mobile + "",
        skype: profile.skype,
        website: profile.website,
        facebook: profile.socialMedia.facebook,
        twitter: profile.socialMedia.twitter,
        linkedin: profile.socialMedia.linkedin,
        imgUrl: profile.imgUrl,
      });
    }
  }

  changeText = (btnName) => {
    this.setState({ btnName });
  };

  onInputChange = (e) => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  //
  fileChangedHandler = (event) => {
    const file = event.target.files[0];
    this.setState({ selectedFile: file });
  };

  uploadImage = (event) => {
    event.preventDefault();

    if (!this.state.selectedFile) return;

    this.setState({
      loading: true,
    });

    const formData = new FormData();
    formData.append(
      "image",
      this.state.selectedFile,
      this.state.selectedFile.name
    );

    axios
      .post(`${baseUrl}api/profile/imageUpdate`, formData)
      .then(({ data }) => {
        console.log("data", data.fileName);
        this.setState({
          images: [data.fileName, ...this.state.images],
          loading: false,
          imgUrl: data.fileName,
        });
      });
  };
  //

  onFormSubmit = (e) => {
    e.preventDefault();
    const updateProfileDetails = {
      name: this.state.name,
      country: this.state.country,
      address: this.state.address,
      about: this.state.about,
      email: this.state.email,
      // mobile: this.state.mobile + "",
      mobile: this.state.mobile,
      skype: this.state.skype,
      website: this.state.website,
      facebook: this.state.facebook,
      twitter: this.state.twitter,
      linkedin: this.state.linkedin,
      //
      imgUrl: this.state.imgUrl,
    };

    this.props.updateProfile(updateProfileDetails);
  };

  render() {
    //
    // const image = (url, index) => (
    //   <img alt="" className="photo" key={index} src={url} />
    // );
    // const images = this.state.images.map(e => image(e.secure_url, e._id));
    //
    const { btnName } = this.state;

    if (Object.keys(this.props.message.msg).length > 0) {
      toast.success(this.props.message.msg);
    }
    const { profile } = this.props.profile;
    let renderContent;
    const options = [
      { label: "Choose...", value: "" },
      { label: "India", value: "india" },
      { label: "USA", value: "usa" },
      { label: "UK", value: "uk" },
    ];

    if (Object.keys(profile).length > 0) {
      renderContent = (
        <div className="m-auto col-lg-8 col-md-8 col-sm-12 pb-5  ">
          {/* <button 
     onClick={ () => { this.changeText("Mobile Verified")}  }> {btnName} </button> */}
          <NavLink className="nav-item nav-link" to="/otp">
            <button
              onClick={() => {
                this.changeText("Mobile Verified");
              }}
            >
              {" "}
              {btnName}{" "}
            </button>
          </NavLink>
          <div className="">
            <Link
              to="/agent/properties"
              className="btn btn-primary float-right"
            >
              <i className="fa fa-building" /> Total Properties{" "}
              {this.state.propertyCount}
            </Link>

            <div className="display-4 my-5 text-center">Agent Profile</div>

            {/* add */}
            <div className="Headerlabel">
              <div className="Headerlabel1">
                <Container>
                  <Row>
                    <Col>
                      <form method="post" onSubmit={this.uploadImage}>
                        <label className="label" htmlFor="gallery-image">
                          Choose an image to upload
                        </label>
                        <input
                          type="file"
                          onChange={this.fileChangedHandler}
                          id="gallery-image"
                          accept=".jpg, .jpeg, .png"
                        />
                        <button type="submit">Upload!</button>
                      </form>

                      <div className="loading-indicator">
                        {this.state.loading ? <Spinner name="spinner" /> : ""}
                      </div>
                    </Col>
                    <Col>
                      <div className="gallery">
                        {this.state.images.map((url, i) => {
                          return (
                            <img key={i} src={`${baseUrl}uploads/${url}`} />
                          );
                        })}
                      </div>
                    </Col>
                  </Row>
                  {/* <Row>
                <Col>
                  <div className="gallery">{images}</div>
                </Col>
              </Row> */}
                </Container>
              </div>
              {/* add */}
              <div className="Headerlabel2">
                <form onSubmit={this.onFormSubmit}>
                  <div className="row mt-5">
                    {/* <!-- form left --> */}
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      {/* <!-- Basic info --> */}
                      <div className="basic-info border border-dark p-3">
                        <strong className="text-muted">Basic info</strong>

                        <Input
                          label="Name"
                          name="name"
                          placeholder="john doe"
                          onChange={this.onInputChange}
                          value={this.state.name}
                          error={this.props.errors.name}
                        />

                        <SelectList
                          label="Country"
                          name="country"
                          onChange={this.onInputChange}
                          value={this.state.country}
                          options={options}
                          error={this.props.errors.country}
                        />

                        <TextArea
                          label="Address"
                          name="address"
                          placeholder="your address"
                          onChange={this.onInputChange}
                          value={this.state.address}
                          error={this.props.errors.address}
                        />

                        <TextArea
                          label="About"
                          name="about"
                          placeholder="few lines about your..."
                          onChange={this.onInputChange}
                          value={this.state.about}
                        />
                      </div>

                      {/* <!-- Contact info --> */}
                      <div className="contact-info border border-dark p-3 mt-3">
                        <strong className="text-muted">Contact info</strong>

                        <Input
                          type="email"
                          label="Email"
                          name="email"
                          placeholder="your email..."
                          onChange={this.onInputChange}
                          value={this.state.email}
                          error={this.props.errors.email}
                        />

                        <Input
                          label="Mobile"
                          name="mobile"
                          placeholder="your mobile no..."
                          onChange={this.onInputChange}
                          value={this.state.mobile}
                          error={this.props.errors.mobile}
                        />

                        <Input
                          label="Skype"
                          name="skype"
                          placeholder="user.auther5"
                          onChange={this.onInputChange}
                          value={this.state.skype}
                        />

                        <Input
                          label="Website"
                          name="website"
                          placeholder="your website url"
                          onChange={this.onInputChange}
                          value={this.state.website}
                        />
                      </div>
                    </div>
                    {/* <!-- form right --> */}
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      {/* <!-- Social media --> */}
                      <div className="contact-info border border-dark p-3">
                        <strong className="text-muted">
                          Social accounts :
                        </strong>

                        <Input
                          label="Facebook"
                          name="facebook"
                          placeholder="facebook.com/your-user-name"
                          onChange={this.onInputChange}
                          value={this.state.facebook}
                        />

                        <Input
                          label="Twitter"
                          name="twitter"
                          placeholder="twitter.com/your-user-name"
                          onChange={this.onInputChange}
                          value={this.state.twitter}
                        />

                        <Input
                          label="Linkedin"
                          name="linkedin"
                          placeholder="linkedin.com/your-user-name"
                          onChange={this.onInputChange}
                          value={this.state.linkedin}
                        />
                      </div>
                    </div>

                    <input
                      type="submit"
                      className="btn btn-primary btn-block mx-3 mt-5"
                      value="Update"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      renderContent = (
        <div
          style={{ width: "100%", height: "100vh" }}
          className="d-flex align-items-center justify-content-center"
        >
          <Spinner color="primary" />
        </div>
      );
    }

    return (
      <div className="container-fluid Dashboard">
        <div className="row">
          {/* left section */}
          <AgentMenu />

          {/* add */}
          {this.state.name === "rpclan" ? <AdminRedirect /> : <h5>hello</h5>}
          {/* add */}

          {/* right section */}
          {renderContent}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    message: state.message,
    errors: state.errors,
    auth: state.auth,
    profile: state.profile,
    property: state.property,
  };
};

export default connect(mapStateToProps, actions)(Dashboard);
