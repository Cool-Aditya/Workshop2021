import React from "react";
// import "./styles/App.css";
import {
  Container,
  Card,
  CardContent,
  CardActions,
  Grid,
  Button,
  Typography,
  Avatar,
  Box,
  Badge,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 290,
    height: "11vh",
  },
  margin: {
    marginRight: 15,
  },
  marginleft: {
    marginLeft: 65,
  },
  height: {
    height: 15,
    width: 200,
    alignItems: "center",
  },
  title: {
    fontSize: 14,
  },
  subTitle: {
    fontSize: 10,
  },
}));

function Cards({ url, color }) {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Card>
        <CardContent>
          <Box display="flex" flexDirection="row" className={classes.height}>
            <Avatar className={classes.margin} src={url} />
            <Box display="flex" flexDirection="column">
              <Typography className={classes.title} varient="h4">
                Post Title
              </Typography>
              <Typography className={classes.subTitle} varient="h6">
                My name is khan
              </Typography>
            </Box>
            <Badge
              color="secondary"
              variant="dot"
              className={classes.marginleft}
            />
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}

export default Cards;
