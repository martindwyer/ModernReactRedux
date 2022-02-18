import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends React.Component {
  constructor(props) {
    super(props);

    this.renderInput = this.renderInput.bind(this);
  }

  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div classname="header">{error}</div>
        </div>
      );
    }
  }

  renderInput({ input, label, meta }) {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        <div>{this.renderError(meta)}</div>
      </div>
    );
  }

  onSubmit(formValues) {}

  render() {
    return (
      <div>
        <h1>Create a new stream...</h1>
        <form
          className="ui form error"
          onSubmit={this.props.handleSubmit(this.onSubmit)}
        >
          <Field
            name="title"
            label="Title of Stream"
            component={this.renderInput}
          />
          <Field
            name="description"
            label="Enter Description"
            component={this.renderInput}
          />

          <button type="submit" className="ui button primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    errors.title = "You must enter a title";
  }
  if (!formValues.description) {
    errors.description = "You must enter a description";
  }

  return errors;
};

export default reduxForm({
  form: "streamCreate",
  validate,
})(StreamCreate);
