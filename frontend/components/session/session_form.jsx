import React from 'react';
import {Link} from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.user;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e, field) {
    this.setState({[field]: e.currentTarget.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    // console.log("currentTarget:", e.currentTarget)
    // console.log(user);
    this.props.submit(this.state);
  }
  

  render() {
    let emailField = <div></div>;
    let sessionLink;
    if (this.props.formType === "Sign Up") {
      sessionLink = <Link to="/login" className="login-link">Login</Link>

      emailField = (
        <input 
          onChange={e => this.handleChange(e, "email")}
          type="text" 
          className="email-field"
          placeholder="Email"
          value={this.state.email}
        />
      );
    } else {
      sessionLink = <Link to="signup" className="signup-link">Sign up for free</Link>
    }

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={e => this.handleChange(e, "username")}
            type="text" 
            className="username-field" 
            placeholder="Username"
            value={this.state.username}           
            />

          {emailField}

          <input 
            onChange={e => this.handleChange(e, "password")}
            type="password"
            className="password-field"
            placeholder="Password"
            value={this.state.passwords}
            />

          <button className="submit-button" type="submit">{this.props.formType}</button>

        </form>

        {sessionLink}
      </div>
    )
  }
}

export default SessionForm;