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
    console.log('clear')
    this.props.clearErrors();
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

  demoLogin(e) {
    e.preventDefault;
    this.props.submit({username: 'hagrid', password: 'nevermore'});
  }
  

  render() {
    let emailField = null;
    let sessionLink;
    if (this.props.formType === "Sign Up") {
      sessionLink = <Link onClick={this.clearErrors} to="/login" className="alt-link">Login</Link>

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
    }

    return (
      <div className='session-page'>
        <form className='session-form' onSubmit={this.handleSubmit}>
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
        <button onClick={this.demoLogin}>Demo Login</button>
      </div>
    )
  }
}

export default SessionForm;