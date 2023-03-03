import React, { Component } from "react";
import socketIOClient from "socket.io-client";
import MessageList from "./MessageList";
import MessageForm from "./MessageForm";
import { Redirect } from "react-router-dom";

class Chatroom extends Component {
  state = {
    socket: null,
    messages: [
      { text: "Hi", member: "chochai" },
      { text: "Hi", member: "Mark" },
      { text: "Good Bye", member: "chochai" },
      { text: "Bye", member: "Mark" }
    ]
  };

  componentDidMount() {
    if (this.state.socket == null) {
      const socket = socketIOClient("http://localhost:8080");
      socket.on("message", message => {
        this.addMessage(message);
      });

      this.setState({ socket: socket });
    }
  }

  onMessageSend = message => {
    this.addMessage(message);

    this.state.socket.emit("emit", { ...message });
  };

  addMessage = message => {
    this.setState({ messages: [...this.state.messages, { ...message }] });
  };

  render() {
    if (this.props.location.name == null) {
      return <Redirect to="/chat" />;
    }

    const { name } = this.props.location;
    return (
      <div>
        <MessageList messages={this.state.messages} />
        <MessageForm onMessageSend={this.onMessageSend} currentMember={name} />
      </div>
    );
  }
}

export default Chatroom;
