import React from "react";
import { TextArea } from "../../../components/";
import axios from "axios";
import { baseUrl } from "../../../baseURL/baseURL";

class QuestionPage extends React.Component {
  state = {
    question: "",
    answer: "",
    errors: {},
  };

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
    const { id, title } = this.props;
    const propertyDetails = {
      title: title,
      question: this.state.question,
    };
    console.log("skddj", id);
    // this.props.addProperty(propertyDetails);
    axios
      .post(`${baseUrl}api/property/${id}`, propertyDetails)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  render() {
    const { question, answer } = this.props;
    return (
      <div className="container">
        {/* add */}
        <div className="m-auto col-lg-8 col-md-8 col-sm-12  p-2">
          <div className="title text-center display-7 mb-4">
            Have Any Question ?
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

        <h4>{question}</h4>
        <p>{answer}</p>
      </div>
    );
  }
}

export default QuestionPage;
