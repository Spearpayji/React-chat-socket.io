import React, { Component } from "react";
import "./App.css";
import User from "./user/User";
import Post from "./post/Post";
import Chatroom from "./chat/Chatroom";
import Chatform from "./chat/Chatform";
import { Route } from "react-router-dom";
import Request from "./lib/Request";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

class App extends Component {
  state = {
    name: "FutureSkill"
  };

  onNameChange = name => {
    this.setState({ name: name });
  };

  render() {

    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Home</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/users">Users</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/posts">Posts</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/chat">Chat</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <Route
          path="/users"
          component={() => (
            <Request url="https://jsonplaceholder.typicode.com/users">
              {data => <User data={data} />}
            </Request>
          )}
        />
        <Route
          path="/posts"
          component={() => (
            <Request url="https://jsonplaceholder.typicode.com/posts">
              {data => <Post data={data} />}
            </Request>
          )}
        />
        <Route path="/chat" component={Chatform} />
        <Route path="/chatroom" component={Chatroom} />
      </div>
    );
  }
}

export default App;
