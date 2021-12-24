import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import Form from "../src/components/Form/Form"
import Posts from "../src/components/Posts/Posts"
import image from "../src/images/image1.png"
import useStyles from './style'
const App = () => {
  const classes=useStyles();
  return (
    <Container maxidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Blog
        </Typography>
         <img  className={classes.image} src={image} alt="blog-image" height="60"/>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing="3">
            <Grid item xs={12} sm={7}>
              <Posts/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
