import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Users from "../Users/Users";

const useStyles = makeStyles({
  root: {
    maxWidth: "75%",
    margin: "20px auto",
    boxShadow: "5px 5px 10px gray",
  },
});

const Comments = (props) => {
  const [users, setUsers] = useState({});
  let user = [];
  for (let i = 0; i < users.length; i++) {
    user = users[i];
  }
  useEffect(() => {
    const url = "https://randomuser.me/api/?results=5";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUsers(data.results));
  }, []);
  const classes = useStyles();
  const { body, name } = props.comment;
  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea>
          <Users user={user}></Users>
          <CardContent>
            <Typography
              style={{ color: "#2196f3" }}
              gutterBottom
              variant="h5"
              component="h2"
            >
              {name}
            </Typography>
            <Typography
              style={{ color: "#d84315" }}
              variant="body2"
              color="textSecondary"
              component="p"
            >
              {body}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default Comments;
