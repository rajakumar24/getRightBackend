import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../store/actions";
import { Input, TextArea, SelectList, CheckBox } from "../../../components";
import { Spinner } from "reactstrap";
import axios from "axios";
// import { Redirect } from 'react-router-dom'

class Ques extends Component {
  state = {
    id: "",
    title: "",
    imgUrl: "",
    price: "",
    description: "",
    address: "",
    lat: "",
    lng: "",
    country: "",
    state: "",
    city: "",
    zip: "",
    propertyType: "",
    status: "",
    beds: "",
    baths: "",
    area: "",
    garages: "",
    ac: "",
    gym: "",
    bar: "",
    internet: "",
    microwave: "",
    smoking: "",
    fireplace: "",
    toaster: "",
    tennis: "",
    tv: "",
    loading: false,
    redirect: false,
    approve: "",
    question: "",
    answer: "",
    errors: {},
  };

  componentWillMount() {
    this.props.getProperty(this.props.match.params.id, this.props.history);
  }
  componentWillUnmount() {
    this.props.clearError();
  }

  handleInputChange = ({ currentTarget }) => {
    const value =
      currentTarget.type === "checkbox"
        ? currentTarget.checked
        : currentTarget.value;

    this.setState({
      [currentTarget.name]: value,
    });
  };

  onFormSubmit = (e) => {
    e.preventDefault();

    this.setState({
      redirect: true,
    });

    console.log("appy", this.state.approve);

    const propertyDetails = {
      id: this.state.id,
      title: this.state.title,
      imgUrl: this.state.imgUrl,
      price: this.state.price,
      description: this.state.description,
      address: this.state.address,
      country: this.state.country,
      lat: this.state.lat,
      lng: this.state.lng,
      state: this.state.state,
      city: this.state.city,
      zip: this.state.zip,
      propertyType: this.state.propertyType,
      status: this.state.status,
      beds: this.state.beds,
      baths: this.state.baths,
      area: this.state.area,
      garages: this.state.garages,
      ac: this.state.ac,
      gym: this.state.gym,
      bar: this.state.bar,
      internet: this.state.internet,
      microwave: this.state.microwave,
      smoking: this.state.smoking,
      fireplace: this.state.fireplace,
      toaster: this.state.toaster,
      tennis: this.state.tennis,
      tv: this.state.tv,
      question: this.state.question,
      answer: this.state.answer,
      approve: this.state.approve,
    };
    console.log("app", propertyDetails.approve);

    axios
      .put(
        `http://localhost:3001/api/property/${propertyDetails.id}`,
        propertyDetails
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  numbersOnly = (e) => {
    const price = e.currentTarget.value;

    if (isNaN(price) || price === "0") {
      e.currentTarget.value = "";
    }

    if (price) {
    }
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }

    if (Object.keys(nextProps.property.property).length > 0) {
      const property = nextProps.property.property;
      this.setState({
        id: property._id,
        title: property.title,
        imgUrl: property.imgUrl,
        price: property.price + "",
        description: property.description,
        address: property.address,
        country: property.country,
        lat: property.mapLocation.lat,
        lng: property.mapLocation.lng,
        state: property.state,
        city: property.city,
        zip: property.zip + "",
        propertyType: property.propertyType,
        status: property.status,
        beds: property.beds + "",
        baths: property.baths + "",
        area: property.area + "",
        garages: property.garages + "",
        ac: property.features.ac,
        gym: property.features.gym,
        bar: property.features.bar,
        internet: property.features.internet,
        microwave: property.features.microwave,
        smoking: property.features.smoking,
        fireplace: property.features.fireplace,
        toaster: property.features.toaster,
        tennis: property.features.tennis,
        tv: property.features.tv,
        question: property.question,
        answer: property.answer,
        approve: property.approve,
      });
    }
  }

  render() {
    const { property } = this.props.property;

    let renderContent;

    if (Object.keys(property).length > 0) {
      let statusColor = this.state.status === "rent" ? "warning" : "success";
      renderContent = (
        <React.Fragment>
          <h1 className="display-4 my-5 text-center">{this.state.title}</h1>
          <div className="row mt-5">
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="row mt-4">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <span className={`badge badge-${statusColor}`}>
                    {this.state.status}
                  </span>
                  <img
                    style={{ width: "360px", height: "280px" }}
                    className="property-img"
                    src={this.state.imgUrl}
                    alt="Responsive"
                  />
                </div>

                <div className="col-lg-12 col-md-12 col-sm-12">
                  <p className="mt-3">
                    <strong>Quick Summary:</strong>
                  </p>
                  <div className="table-responsive">
                    <table className="table table-hover table-sm">
                      <tbody>
                        <tr>
                          <th scope="row">Location</th>
                          <td>{this.state.address}</td>
                        </tr>
                        <tr>
                          <th scope="row">Price</th>
                          <td>${this.state.price}</td>
                        </tr>

                        <tr>
                          <th scope="row">Property Type: </th>
                          <td>House</td>
                        </tr>
                        <tr>
                          <th scope="row">Status:</th>
                          <td>{this.state.status}</td>
                        </tr>
                        <tr>
                          <th scope="row">Area:</th>
                          <td>
                            {this.state.area} m<sup>2</sup>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">Beds:</th>
                          <td>{this.state.beds}</td>
                        </tr>
                        <tr>
                          <th scope="row">Baths:</th>
                          <td>{this.state.baths}</td>
                        </tr>
                        <tr>
                          <th scope="row">Garages:</th>
                          <td>{this.state.garages}</td>
                        </tr>
                        <tr>
                          <th>Rating:</th>
                          <td>5</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-8  col-md-8 col-sm-12">
              <div className="description">
                <p className="mt-3 border-bottom pb-3">
                  <strong>Property Description: </strong>
                </p>

                <p>{this.state.description}</p>
              </div>

              <div className="detail">
                <p className="mt-3 border-bottom pb-3">
                  <strong>Property Features:</strong>{" "}
                </p>

                <ul>
                  {this.state.ac && <li>Air conditioning</li>}
                  {this.state.gym && <li>Gym</li>}
                  {this.state.bar && <li>Bar</li>}
                  {this.state.internet && <li>Internet</li>}
                  {this.state.microwave && <li>Microwave</li>}
                  {this.state.smoking && <li>Smoking allowed</li>}
                  {this.state.fireplace && <li>Fireplace or fire pit</li>}
                  {this.state.toaster && <li>Toaster</li>}
                  {this.state.tennis && <li>Tennis Courts</li>}
                  {this.state.tv && <li>Cable TV</li>}
                </ul>
              </div>

              {/* <div className="agent-profile my-5">
                    <p className="mt-3 border-bottom pb-3">
                      <strong>Agent:</strong>
                    </p>
                    <div className="d-flex flex-row border rounded">
                      <div className="p-0 w-25">
                        <img
                          src="data:image/jpeg;base64,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"
                          className="img-thumbnail border-0"
                          alt=""
                        />
                      </div>
                      <div className="pl-3 pt-2 pr-2 pb-2 w-75 border-left">
                        <h4 className="name text-primary">{this.state.name}</h4>
                        <p className="lead">{this.state.about}</p>
                        <ul className="agent-details list-group">
                          <li className="list-group-item">
                            Phone: <span className="float-right">(123) 456 789</span>
                          </li>
                          <li className="list-group-item">
                            Mobile: <span className="float-right">{this.state.mobile}</span>
                          </li>
                          <li className="list-group-item">
                            Email: <span className="float-right">{this.state.email}</span>
                          </li>
                          <li className="list-group-item">
                            Skype: <span className="float-right">{this.state.skype}</span>
                          </li>
                        </ul>
                        <Link
                          to={`/agent-profile/${this.state.id}`}
                          className="text-right mt-4 btn btn-primary"
                        >
                          <i className="fa fa-user" /> View Profile
                        </Link> 
                      </div>
                    </div>
                  </div>*/}
            </div>
          </div>

          {/* <QuestionPage
              id= {_id}
            question={question}
            answer={answer}
              /> */}

          {/* <QuesPage
              id= {_id}
              title={title}
              imgUrl={imgUrl}
              address={address}
              price={price}
              status={status}
              area={area}
              beds={beds}
              baths={baths}
              garages={garages}
              description={description}
              features={features}
            question={question}
            answer={answer}
              /> */}
        </React.Fragment>
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

    return <React.Fragment>{renderContent}</React.Fragment>;
  }
}

const mapStateToProps = (state) => {
  return {
    errors: state.errors,
    property: state.property,
  };
};

export default connect(mapStateToProps, actions)(Ques);
