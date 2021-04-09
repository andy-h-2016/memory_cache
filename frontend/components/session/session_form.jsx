import React from 'react';
import {Link} from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.user;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
    this.clearErrors = this.clearErrors.bind(this);
  }

  clearErrors() {
    this.props.clearErrors();
  }

  handleChange(e, field) {
    this.setState({[field]: e.currentTarget.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submit(this.state);
  }

  demoLogin(e) {
    e.preventDefault;
    this.props.submit({username: 'hagrid', password: 'nevermore'});
  }
  

  render() {
    let emailField = null;
    let firstNameField = null;
    let lastNameField = null;
    let sessionLink;
    let demoButton = null;

    if (this.props.formType === "Sign Up") {
      sessionLink = <Link onClick={this.clearErrors} to="/login" className="alt-link">Login</Link>

      firstNameField = (
        <input 
          onChange={e => this.handleChange(e, "firstName")}
          type="text"
          className="first-name-field"
          placeholder="First Name"
          value={this.state.firstName}
        />
        )

       lastNameField = (
          <input 
            onChange={e => this.handleChange(e, "lastName")}
            type="text"
            className="last-name-field"
            placeholder="Last Name"
            value={this.state.lastName}
          />
        )

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
      sessionLink = <Link onClick={this.clearErrors} to="signup" className="alt-link">Sign up for free</Link>
      demoButton = <button onClick={this.demoLogin}>Demo Login</button>
    }

    return (
      <div className='session-page'>
        <form className='session-form' onSubmit={this.handleSubmit}>
          {firstNameField}
          {lastNameField}

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
        {demoButton}
      </div>
    )
  }
}

export default SessionForm;