import React from "react";
import Avatar from "@material-ui/core/Avatar";

const Users = (props) => {
  const { cell, name, picture, email } = props.user;
  return (
    <div style={{ padding: "20px", display: "flex" }}>
      <div>{cell && <Avatar alt="Remy Sharp" src={picture.large} />}</div>
      <div style={{ marginLeft: "8px" }}>
        {props.user.cell && (
          <div>
            <small>
              {name.first} {name.last}
            </small>
            <br />
            <small> {email} </small>
          </div>
        )}
      </div>
    </div>
  );
};

export default Users;
