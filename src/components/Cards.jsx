import React from "react";
// import "./styles/App.css";
import {
  Container,
  Card,
  CardContent,
  Typography,
  Avatar,
  Box,
  Badge,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 290,
    height: "10vh",
  },
  margin: {
    marginRight: 15,
  },
  marginleft: {
    marginRight: 5,
    marginLeft: 60,
  },
  height: {
    height: 10,
    width: 200,
    alignItems: "center",
  },
  title: {
    fontSize: 11,
  },
  subTitle: {
    fontSize: 10,
  },
}));

function Cards({ url, color, name, subtitle }) {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Card>
        <CardContent>
          <Box display="flex" flexDirection="row" className={classes.height}>
            <Avatar className={classes.margin} src={url} />
            <Box display="flex" flexDirection="column">
              <Typography className={classes.title} varient="h4">
                {<b>{name}</b>}
              </Typography>
              <Typography className={classes.subTitle} varient="h6">
                {subtitle}
              </Typography>
            </Box>
            <Badge color={color} variant="dot" className={classes.marginleft} />
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}

export default Cards;
