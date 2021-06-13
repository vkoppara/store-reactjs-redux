import React, { Component } from "react";
import Input from "./input";
import Joi from "joi-browser";

class Login extends Component {
  state = {
    account: {
      username: "",
      password: "",
      rusername: "",
      rpassword: "",
      email: "",
    },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
    rusername: Joi.string().required().label("Username"),
    rpassword: Joi.string().required().label("Password"),
    email: Joi.string().required().label("Email"),
  };

  validateProperty = ({ name, value }) => {
    //user joi npm i joi-browser
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;

    /*
        if(name === "username"){
            if (value.trim() === '') return 'Username is rquired';            
        }
        if(name === "password"){
            if (value.trim() === '') return 'Password is rquired';            
        }
        */
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account, errors });
  };

  validate = () => {
    const result = Joi.validate(this.state.account, this.schema, {
      abortEarly: false,
    });

    if (!result.error) return null;
    const errors = {};
    for (let item of result.error.details) errors[item.path[0]] = item.message;
    return errors;
    /*const {account }= this.state;
       if (account.username.trim() === '' )
        errors.username = 'Username is required.';
        if (account.password.trim() === '' )
        errors.password = 'Password is required.';
        
       errors.username = result.error
        return Object.keys(errors).length === 0 ? null: errors;
        */
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    console.log(errors);
    this.setState({ errors: errors || {} });
    //call the server and redirect to the page
    console.log("submitted");
  };
  render() {
    const { account, errors } = this.state;
    return (
      <div className="row">
        <div className="col-4">
          <h2>Login</h2>
          <form onSubmit={this.handleSubmit}>
            <Input
              name="username"
              label="Username"
              value={account.username}
              onChange={this.handleChange}
              error={errors.username}
            />
            <Input
              name="password"
              label="Password"
              value={account.password}
              onChange={this.handleChange}
              error={errors.password}
            />
            <br />
            <button className="btn btn-primary" disabled={this.validate()}>
              Login
            </button>
          </form>
        </div>
        <div className="col">
          <h2>Register</h2>
          <form onSubmit={this.handleSubmit}>
            <Input
              name="rusername"
              label="Username"
              value={account.rusername}
              onChange={this.handleChange}
              error={errors.rusername}
            />
            <Input
              name="rpassword"
              label="Password"
              value={account.rpassword}
              onChange={this.handleChange}
              error={errors.rpassword}
            />
            <Input
              name="email"
              label="Email"
              value={account.email}
              onChange={this.handleChange}
              error={errors.email}
            />
            <br />
            <button className="btn btn-primary" disabled={this.validate()}>
              Register
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
