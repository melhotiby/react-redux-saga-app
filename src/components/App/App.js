import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsersRequest, createUserRequest } from "../../actions/users";
import UserList from "../UserList/UserList";
import UserForm from "../UserForm/UserForm";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    props.getUsersRequest();
  }

  handleSubmit = ({ firstName, lastName }) => {
    this.props.createUserRequest({ firstName, lastName });
  };

  render() {
    const { users } = this.props;

    return (
      <div className="container">
        <UserForm onSubmit={this.handleSubmit} />
        <UserList users={users.items} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

export default connect(
  mapStateToProps,
  {
    getUsersRequest,
    createUserRequest
  }
)(App);
