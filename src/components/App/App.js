import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getUsersRequest,
  createUserRequest,
  deleteUserRequest,
  userError
} from "../../actions/users";
import UserList from "../UserList/UserList";
import UserForm from "../UserForm/UserForm";
import { Alert } from "reactstrap";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    props.getUsersRequest();
  }

  handleSubmit = ({ firstName, lastName }) => {
    this.props.createUserRequest({ firstName, lastName });
  };

  handleDeleteUser = userId => e => {
    this.props.deleteUserRequest(userId);
  };

  handleCloseAlert = () => {
    this.props.userError({
      error: ""
    });
  };

  render() {
    const { users } = this.props;

    return (
      <div className="container">
        <Alert
          color="danger"
          isOpen={!!users.error}
          toggle={this.handleCloseAlert}
        >
          {users.error}
        </Alert>
        <UserForm onSubmit={this.handleSubmit} />
        <UserList users={users.items} onDeleteUser={this.handleDeleteUser} />
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
    createUserRequest,
    deleteUserRequest,
    userError
  }
)(App);
