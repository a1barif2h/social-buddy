import React from "react";
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
  const classes = useStyles();
  const { body, name, email } = props.comment;
  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea>
          <Users></Users>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {body}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default Comments;
