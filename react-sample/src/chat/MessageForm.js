import React, { Component } from "react";

class MessageForm extends Component {
  state = {
    text: ""
  };

  onSubmit = e => {
    e.preventDefault();
    // send message
    this.props.onMessageSend({
      text: this.state.text,
      member: this.props.currentMember
    });
    this.setState({ text: "" });
  };

  onChange = e => {
    this.setState({ text: e.target.value });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} className="MessageForm">
        <input
          className="MessageInput"
          type="text"
          value={this.state.text}
          onChange={this.onChange}
        />
        <button className="MessageButton">Send</button>
      </form>
    );
  }
}

export default MessageForm;
