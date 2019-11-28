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
    color: 'black',
    backgroundColor: 'white'
  }

});





class Gallery extends Component {

  state = {
    currentImg: 1,
    numberOfImgs: 12
  }
  nextPhoto = () => {
    if (this.state.currentImg === this.state.numberOfImgs) this.setState({ currentImg: 1 })
    else this.setState({ currentImg: this.state.currentImg + 1 })
  }

  prevPhoto = () => {
    if (this.state.currentImg === 1) this.setState({ currentImg: this.state.numberOfImgs })
    else this.setState({ currentImg: this.state.currentImg - 1 })
  }


  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Box onClick={this.nextPhoto} style={{
          height: '450px', width: '70vw', padding: '0', margin: '0',
          backgroundImage: `url(./images/big${this.state.currentImg}.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }} m={1}>
        </Box>
        <Box style={{ fontSize: '24px', fontWeight: 'bold', justifyContent: 'center', display: 'flex' }}>
          <span style={{ cursor: 'pointer', marginRight: '10px' }} onClick={this.prevPhoto}>‹</span>
          <span>{this.state.currentImg}/{this.state.numberOfImgs}</span>
          <span style={{ cursor: 'pointer', marginLeft: '10px' }} onClick={this.nextPhoto}>›</span>
        </Box>
      </div>
    )
  }
}

const AboutMe = () => <div style={{ padding: '20px', minWidth: '350px', minHeight: '300px', backgroundColor: 'rgba(0, 0, 0, 0.2)', display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap' }}>
  <div style={{
    backgroundImage: 'url(./images/aboutme.jpg)',
    padding: '20px',
    width: '220px', height: '220px', backgroundSize: 'cover',
    backgroundPosition: 'center',
    flexShrink: '0'
  }}></div>
  <div style={{
    padding: '20px',

    width: '300px', height: '300px',
    flexShrink: '0'
  }}>
    <h2 style={{ textAlign: 'center' }}>About Me</h2>
    <p style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident laboriosam incidunt asperiores temporibus porro sapiente sed assumenda delectus, ullam, officiis a laudantium odio voluptas aliquam ducimus doloremque earum perferendis recusandae debitis dolores ratione. Cum a sint illum animi provident eum? Unde illum repellendus, rem animi saepe blanditiis nam reiciendis nesciunt!</p>
  </div>
</div>
const Contact = () => <div style={{ padding: '20px', minWidth: '350px', minHeight: '300px', backgroundColor: 'rgba(0, 0, 0, 0.2)', display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap' }}>
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2561.770168374606!2d19.94403051529857!3d50.053136579422564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b6a94e3a889%3A0x42b468145b2bccc9!2sMiodowa%2C%20Krak%C3%B3w!5e0!3m2!1spl!2spl!4v1574948878596!5m2!1spl!2spl" style={{ width: "400", height: "300", frameborder: "0" }} ></iframe>
  <div style={{
    display: 'flex', flexDirection: 'column', justifyContent: 'center',
    width: '300px', height: '300px',
    flexShrink: '0'
  }}>
    <h4 style={{ textAlign: 'center' }}>Phone:123-123-123</h4>
    <h4 style={{ textAlign: 'center' }}>Email:lorem@ipsum.com</h4>
    <h4 style={{ textAlign: 'center' }}>Address: Lorem street 11/23</h4>
  </div>
</div>


const Header = () => <NavLink to='/' style={{ textDecoration: 'none', fontSize: '36px', fontWeight: 'bold', margin: '20px', alignSelf: 'flex-start', color: 'white',paddingLeft:'20px' }}>
  ART <span style={{ color: 'red' }}>GALLERY</span>
</NavLink>

const Footer = () => <footer style={{ textAlign: 'center' }}>
  <span style={{ color: 'white', fontSize: '12px' }}>CopyRight</span>
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

const Home = () => <div style={{ fontFamily: 'Monospace', fontSize: '30px', minWidth: '300px', height: '40vh', backgroundColor: 'rgba(0, 0, 0, 0.7)', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center' }}>
  <NavLink style={{ color: 'white', textDecoration: 'none' }} to='/gallery'>Gallery</NavLink>
  <NavLink style={{ color: 'white', textDecoration: 'none' }} to='/aboutme'>About Me</NavLink>
  <NavLink style={{ color: 'white', textDecoration: 'none' }} to='/contact'>Contact</NavLink>
</div>

const App = () => <HashRouter>
  <div style={{
    backgroundImage: `url(./images/big1.jpg)`,
    backgroundSize: 'cover', fontFamily: '"Roboto", sans-serif', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center'
  }}>
    <Header />
    <div style={{ maxWidth: "1280px" }}>

      <Route path='/:subpage' component={subPage} />
      <Route path exact='/' component={Home} />

    </div>

    <Footer />
  </div>
</HashRouter>

ReactDOM.render(
  <App />, document.getElementById("app"));
