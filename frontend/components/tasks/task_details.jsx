import React from 'react';

class TaskDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('taskDetails', this.props);
    return (
      <div>Everything you need to know about tasks!</div>
    )
  }
}

export default TaskDetails;