import React from "react";
import Project from "../Project.js";
import KitchenAlchemy from "../../assets/images/kitchenalchemy.png";
import SneezeTheDay from "../../assets/images/sneeze-the-day.png";
import CodeQuiz from "../../assets/images/code-quiz.png";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Container,
  Grid,
  Typography
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    height: "100%",
    
  },
  media: {
    height: 140,
  },
});

export const Portfolio = () => {
  const classes = useStyles();

  return (
    <Container>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        margin="3% auto"
    >
        <Typography
            variant="h4"
            style={{
                color:"#283845",
              fontWeight: "bold"}}
        >
        Portfolio
        </Typography>
      </Box>
      <Grid
        container
        className={classes.root} 
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Grid item xs>
            <Project
                title="Kitchen Alchemy"
                thumbnail={KitchenAlchemy}
                imgAlt="Welcome and log-in page for recipe app."
                appUrl="https://kitchen-alchemy.herokuapp.com/"
                gitHubUrl="https://github.com/Zed-CSP/codeConnoisseurs"
                descriptionP1="Application allowing users to create and save recipes to a database for easy and simple access."
                descriptionP2="Full-stack agile team development project for UC Berkeley Extension coding bootcamp utilizing SQL/Sequelize for database functionality."
                descriptionP3="Notable contribution: Nodemailer package setup to send welcome email for new accounts."
            />   
        </Grid>

        <Grid item xs>
            <Project
                title="Sneeze the Day"
                thumbnail={SneezeTheDay}
                imgAlt="Welcome page with city-search field."
                appUrl="https://zed-csp.github.io/dangerForce-Proj-1/"
                gitHubUrl="https://github.com/Zed-CSP/dangerForce-Proj-1"
                descriptionP1="Web app that allows users to look up air quality data for cities around the world."
                descriptionP2="Front-end agile development project for UC Berkeley Extension coding bootcamp utilizing multiple API requests and a CSS Framework other than Bootstrap."
                descriptionP3="Notable contribution: Led implementation of Tailwind CSS Framework."
            />
        </Grid>

        <Grid item xs>
            <Project
                title="Coding Quiz"
                thumbnail={CodeQuiz}
                imgAlt="Landing page with start button."
                appUrl="https://sarah-jensen.github.io/code-quiz/"
                gitHubUrl="https://github.com/sarah-jensen/code-quiz"
                descriptionP1="Flash-card style quiz for coding fundamentals."
                descriptionP2="Individual front-end development project for UC Berkeley Extension coding bootcamp utilizing responsive elements and local storage."
                
            />
        </Grid>
          
      </Grid>
    </Container>
  );
};

export default Portfolio;