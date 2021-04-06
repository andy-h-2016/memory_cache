import React from 'react';

class ErrorsDisplay extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    let errorLIs = null;
    if (this.props.errors.length > 0) {
      errorLIs = this.props.errors.map(error => <li>{error}</li>);
    }
    
    return (
      <ul className="errors-display">
        {errorLIs}
      </ul>
    );
  }
}

export default ErrorsDisplay;