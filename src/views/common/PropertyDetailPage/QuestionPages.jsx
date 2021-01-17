import React, { Component } from "react";
import { TextArea } from "../../../components";
import axios from "axios";
import { connect } from "react-redux";
import * as actions from "../../../store/actions";
import { baseUrl } from "../../../baseURL/baseURL";

class QuesPage extends Component {
  state = {
    // id: "",
    // title: "",
    // imgUrl: "",
    // price: "",
    // description: "",
    // address: "",
    // lat: "",
    // lng: "",
    // country: "",
    // state: "",
    // city: "",
    // zip: "",
    // propertyType: "",
    // status: "",
    // beds: "",
    // baths: "",
    // area: "",
    // garages: "",
    // ac: "",
    // gym: "",
    // bar: "",
    // internet: "",
    // microwave: "",
    // smoking: "",
    // fireplace: "",
    // toaster: "",
    // tennis: "",
    // tv: "",
    // loading: false,
    // redirect: false,
    // approve: "",
    question: "",
    //answer: "czxczx",
  };

  //   componentWillMount() {
  //     this.props.getProperty(this.props.match.params.id, this.props.history);
  //   }
  //   componentWillUnmount() {
  //     this.props.clearError();
  //   }

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
    const {
      id,
      title,
      imgUrl,
      address,
      price,
      status,
      area,
      beds,
      baths,
      // garages,
      description,
      // features,
      // question,
      answer,
      // lat,
      // lng,
      country,
      state,
      city,
      zip,
      propertyType,
      garages,
      ac,
      gym,
      bar,
      internet,
      microwave,
      smoking,
      fireplace,
      toaster,
      tennis,
      tv,
      approve,
    } = this.props;
    const propertyDetails = {
      // id: this.state.id,
      id: id,
      title: title,
      imgUrl: imgUrl,
      price: price,
      description: description,
      address: address,
      country: country,
      // lat: lat,
      // lng: lng,
      state: state,
      city: city,
      zip: zip,

      status: status,
      beds: beds,
      baths: baths,
      area: area,
      // answer: answer,
      propertyType: propertyType,
      garages: garages,
      ac: ac,
      gym: gym,
      bar: bar,
      internet: internet,
      microwave: microwave,
      smoking: smoking,
      fireplace: fireplace,
      toaster: toaster,
      tennis: tennis,
      tv: tv,
      approve: approve,
      question: this.state.question,
      answer: answer,
    };

    console.log("quess", propertyDetails.question);
    console.log("idd", id);
    axios
      .put(`${baseUrl}api/property/${id}`, propertyDetails)
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

  render() {
    // const { question, answer} = this.props
    return (
      <div className="container">
        <div className="m-auto col-lg-8 col-md-8 col-sm-12  p-2">
          <div className="title text-center display-7 mb-4">
            Have Any Question ? Please Post Your Question Below!
          </div>
          <form onSubmit={this.onFormSubmit} className="pb-3">
            <TextArea
              classes="col-md-12"
              // label="question"
              name="question"
              placeholder="Type Your Question Here..."
              onChange={this.handleInputChange}
              value={this.state.question}
              // error={this.props.errors.question}
            />

            <button type="submit" className="btn btn-block btn-primary mt-5">
              Submit
            </button>
          </form>
        </div>

        {/* <h4>{question}</h4>
             <p>{answer}</p> */}
      </div>
    );
  }
}

// export default QuesPage

const mapStateToProps = (state) => {
  return {
    errors: state.errors,
    property: state.property,
  };
};

export default connect(mapStateToProps, actions)(QuesPage);
