import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Form, FormGroup, Label, Input } from "reactstrap";

class Chatform extends Component {
  state = {
    name: ""
  };

  onChange = e => {
    this.setState({ name: e.target.value });
  };

  render() {
    const { name } = this.state;
    return (
      <Form>
        <FormGroup>
          <Label for="username">Username</Label>
          <Input
            type="text"
            name="username"
            id="username"
            placeholder="Please enter your name"
            value={name}
            onChange={this.onChange}
          />
        </FormGroup>
        <Link to={{ pathname: "/chatroom", name: name }}>Join</Link>
      </Form>
    );
  }
}

export default Chatform;
