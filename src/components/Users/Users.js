import React, { useState, useEffect } from "react";

const Users = () => {
  const [users, setUsers] = useState({});
  let user = {};
  for (let i = 0; i < users.length; i++) {
    user = users[i];
  }
  useEffect(() => {
    const url = "https://randomuser.me/api/?results=5";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUsers(data.results));
  }, []);
  //   const { large } = user.picture;
  const photo = user.picture;
  console.log(photo);
  return (
    <div>
      {/* <img src={large} alt="" /> */}
      <h1>{user.cell}</h1>
    </div>
  );
};

export default Users;
