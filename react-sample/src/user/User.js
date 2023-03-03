import React, { Component } from "react";
import withRequest from "../lib/withRequest";

class User extends Component {
  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <td>Id</td>
              <td>Name</td>
              <td>Email</td>
            </tr>
          </thead>
          <tbody>
            {this.props.data === undefined ? (
              <div />
            ) : (
              this.props.data.map(user => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default withRequest("https://jsonplaceholder.typicode.com/posts")(User);
