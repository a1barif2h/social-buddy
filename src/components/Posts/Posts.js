import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: "75%",
    margin: "auto",
    marginBottom: "30px",
    boxShadow: "5px 5px 10px gray ",
  },
});
const Posts = (props) => {
  const { id, title, body } = props.post;
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <h2 style={{ color: "#f50057" }}>Post No: {id} </h2>
          <h3 style={{ color: "#2196f3" }}> {title} </h3>
          <h4 style={{ color: "#d84315" }}> {body}</h4>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to="/comments">
          <Button variant="contained" color="primary">
            See Comment
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default Posts;
