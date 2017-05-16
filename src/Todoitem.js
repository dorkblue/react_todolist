import React from 'react';

class Todoitem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: this.props.item,
      count: 0
    }
  }

  upvote(e) {
    this.setState({
      count: this.state.count + 1
    })
  }

  downvote(e) {
    this.setState({
      count: this.state.count - 1
    })
  }

  render() {
    return (
      <div>
        <p>{this.state.description} - <span>{this.state.count}</span></p>
        <button onClick={(e) => this.upvote(e)}>Upvote</button>
        <button onClick={(e) => this.downvote(e)}>Downvote</button>
        <button onClick={(e) => this.props.completed(this.props.index)}>Completed</button>
      </div>
    )
  }

}

export default Todoitem;
