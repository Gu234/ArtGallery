import {
  Button,
  Box,
  Container,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Icon
} from '@material-ui/core/';
// import { ArrowBack, ArrowForward } from '@material-ui/icons';
import { AutoRotatingCarousel, Slide } from 'material-auto-rotating-carousel';
import { makeStyles } from '@material-ui/core/styles';
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch, NavLink } from 'react-router-dom';

const useStyles = makeStyles({
  toolbar: {
    flexDirection: 'row-reverse',
    color: 'primary',
    backgroundColor: 'secondary'
  },
});




const Gallery = () => {
  return (
    <>
      <Box style={{
        height: '500px', width: '100%',
        backgroundImage: 'url(./images/big01.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }} m={1}>
      </Box>
      <Icon className="fas fa-chevron-left"></Icon>
      <Icon className="fas fa-chevron-right"></Icon>
    </>
  )
}
const AboutMe = () => <h1>about me</h1>
const Contact = () => <h1>fdsafdsa</h1>


const Header = () => <AppBar position="static">
  <Toolbar className={useStyles().toolbar} >
    <Typography variant="subtitle1">
      ENG/PL
    </Typography>

  </Toolbar>
</AppBar>

const Footer = () => <footer>
  <h6>CopyRight</h6>
</footer>

const subPage = props => {
  const { subpage } = props.match.params;
  switch (subpage) {
    case 'gallery':
      return <Gallery />
    case 'aboutme':
      return <AboutMe />
    case 'contact':
      return <Contact />
    default:
      return <Home />
  }
}

const Home = () => <div>
  <ul style={{
    display: 'block',
    fontSize: '20px'
  }}>
    <li>
      <NavLink to='/gallery'>Gallery</NavLink>
    </li>
    <li>
      <NavLink to='/aboutme'>About Me</NavLink>
    </li>
    <li>
      <NavLink to='/contact'>Contact</NavLink>
    </li>
  </ul>
</div>

const App = () => <HashRouter>
  <> <CssBaseline />
    <Header />
    <Container maxWidth="lg">

      <Route path='/:subpage' component={subPage} />
      <Footer />

    </Container>

  </>
</HashRouter>

ReactDOM.render(
  <App />, document.getElementById("app"));
