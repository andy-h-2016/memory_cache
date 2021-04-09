import React from 'react';

class ListForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.list;

    this.update = this.update.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(e) {
    this.setState({title: e.currentTarget.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submit(this.state);
  }

  handleCancel(e) {
    e.stopPropagation();
    e.preventDefault();
    this.props.closeModal();
  }

  render() {
    const {formHeader, inputLabel, submitButtonLabel} = this.props;

    return (
      <form className="modal-form">
        {/* this element is a an "X" icon to close the modal */}
        <i className="fas fa-times close-button" onClick={this.handleCancel}></i>

        <h2 className='form-header'>{formHeader}</h2>

        <label className='input-label'>{inputLabel}</label>
        <input onChange={this.update} className="title-field" type="text" value={this.state.title}/>

        <div className="form-buttons-container">
          <button className='modal-button action-button' onClick={this.handleSubmit}>{submitButtonLabel}</button>
          <button className='modal-button cancel-button' onClick={this.handleCancel}>Cancel</button>
        </div>
      </form>
    );
  }
}

export default ListForm;