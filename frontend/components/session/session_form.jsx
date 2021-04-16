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
    let altLink;
    let linkDisplay;
    let demoButton = null;
    let divider;
    let welcomeMessage;

    if (this.props.formType === "Sign Up") {
      altLink = "/login";
      linkDisplay = "Login"
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

      welcomeMessage = "Sign up for free.";
      divider = null;

    } else {
      altLink = "/signup";
      linkDisplay = "Sign up for free"
      demoButton = <button className='submit-button demo-button' onClick={this.demoLogin}>Demo Login</button>
      welcomeMessage = "Been here before? Welcome back!"
      divider = (
        <div className='divider'>
          <hr/>
          <span>OR</span>
        </div>
      )
    }

    return (
      <section className="session-page">
        <section className="decoration-half">
          <img className='session-logo' src={window.transparentLogoURL} alt=""/>

          <div className="motivational-quote">
            <p className="quote-content">
              “Start by doing what’s necessary; then do what’s possible; and 
              suddenly you are doing the impossible.” 
            </p>

            <p className='quote-author'>
              -Francis Of Assisi
            </p>

          </div>
        </section>

        <section className='session-half'>

          <form className='session-form' >
            <h2 className='welcome-message'>{welcomeMessage}</h2>

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

            <button className="submit-button" type="submit" onClick={this.handleSubmit}>{this.props.formType}</button>
            <Link onClick={this.clearErrors} to={altLink} className="alt-link">{linkDisplay}</Link>

            {divider}            

            {demoButton}
          </form>

        </section>
      </section>
      
    )
  }
}

export default SessionForm;