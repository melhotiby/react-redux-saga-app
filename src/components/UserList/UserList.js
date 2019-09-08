import React from "react";
import { ListGroup, ListGroupItem, Button } from "reactstrap";
import { sortWith, ascend, prop } from "ramda";

const nameSort = sortWith([
  ascend(prop("firstName")),
  ascend(prop("lastName"))
]);

const UserList = ({ users }) => {
  return (
    <ListGroup>
      {nameSort(users).map(user => {
        return (
          <ListGroupItem key={user.id}>
            <section className="list-container">
              <div className="list-item">
                {`${user.firstName} ${user.lastName}`}
              </div>
              <div>
                <Button outline color="danger">
                  Delete
                </Button>
              </div>
            </section>
          </ListGroupItem>
        );
      })}
    </ListGroup>
  );
};

export default UserList;
