import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsersRequest } from "../../actions/users";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    props.getUsersRequest();
  }

  render() {
    const { users } = this.props;

    return <div className="container">Test</div>;
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
    getUsersRequest
  }
)(App);
