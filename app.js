import { Box } from '@material-ui/core/';
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, NavLink } from 'react-router-dom';


class Gallery extends Component {
  state = {
    currentImg: 1,
    numberOfImgs: 12,
    smallImgs: Array.from({ length: 12 }, (v, k) => k + 1),
    // currentSmallImg:0
  }
  componentDidMount() {

    this.interval = setInterval(() => {
      this.nextPhoto()
    }, 5000)
  }
  componentWillUnmount() {
    clearInterval(this.interval)
  }

  startInterval = () => {

    this.interval = setInterval(() => {
      this.nextPhoto()
    }, 5000)
  }

  stopInterval = () => {

    clearInterval(this.interval)
  }

  changePhoto = (index) => {
    this.setState({ currentImg: index })
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
      <div style={{
        backgroundSize: 'cover', fontFamily: '"Roboto", sans-serif', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center'
      }}>
        <Header />
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <Box onMouseOver={this.stopInterval} onMouseLeave={this.startInterval} onClick={this.nextPhoto} style={{
            transition: '2s',
            boxShadow: '3px 3px 20px 0px rgba(0,0,0,.7)', marginBottom: '10px',
            height: '450px', width: '70vw', padding: '0', margin: '0',
            backgroundImage: `url(./images/big${this.state.currentImg}.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }} m={1}>
          </Box>
          <Box style={{ marginTop: '10px', fontSize: '24px', fontWeight: 'bold', justifyContent: 'center', display: 'flex' }}>
            <span style={{ cursor: 'pointer', marginRight: '10px' }} onMouseOver={this.stopInterval} onMouseLeave={this.startInterval} onClick={this.prevPhoto}>‹</span>
            <span>{this.state.currentImg}/{this.state.numberOfImgs}</span>
            <span style={{ cursor: 'pointer', marginLeft: '10px' }} onMouseOver={this.stopInterval} onMouseLeave={this.startInterval} onClick={this.nextPhoto}>›</span>
          </Box>
          <Box style={{ maxWidth: '1280px', padding: '0 50px', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
            {this.state.smallImgs.map((item) => {
              const style = {
                boxShadow: '3px 3px 20px 0px rgba(0,0,0,.7)', width: '200px', margin: '20px', height: '100px', backgroundImage: `url(./images/big${item}.jpg)`,
                backgroundSize: 'cover',
                transition: '2s',
                backgroundPosition: 'center',
                border: this.state.currentImg === item ? '2px solid black' : '2px solid white'
              }
              return <div key={item} onClick={() => this.changePhoto(item)} style={style}>
              </div>
            })}
          </Box>

        </div>
        <Footer />
      </div>
    )
  }
}

const AboutMe = () =>
  <div style={{
    backgroundImage: `url(./images/big4.jpg)`,
    backgroundSize: 'cover', fontFamily: '"Roboto", sans-serif', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center'
  }}>
    <Header />
    <Box style={{ boxShadow: '3px 3px 20px 0px rgba(0,0,0,1)', padding: '20px', minWidth: '350px', minHeight: '300px', backgroundColor: 'rgba(0, 0, 0, 0.7)', display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap' }}>
      <Box style={{
        backgroundImage: 'url(./images/aboutme2.png)',
        padding: '20px',
        marginLeft: '20px',
        width: '220px', height: '220px', backgroundSize: 'cover',
        backgroundPosition: 'center',
        flexShrink: '0'
      }}></Box>
      <Box style={{
        color: 'white',
        padding: '20px',

        width: '300px', height: '300px',
        flexShrink: '0'
      }}>
        <h2 style={{ textAlign: 'center' }}>About Me</h2>
        <p style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident laboriosam incidunt asperiores temporibus porro sapiente sed assumenda delectus, ullam, officiis a laudantium odio voluptas aliquam ducimus doloremque earum perferendis recusandae debitis dolores ratione. Cum a sint illum animi provident eum? Unde illum repellendus, rem animi saepe blanditiis nam reiciendis nesciunt!</p>
      </Box>
    </Box>
    <Footer />
  </div>

const Contact = () =>
  <div style={{
    backgroundImage: `url(./images/big2.jpg)`,
    backgroundSize: 'cover', fontFamily: '"Roboto", sans-serif', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center'
  }}>
    <Header />

    <div style={{ boxShadow: '3px 3px 20px 0px rgba(0,0,0,1)', color: 'white', padding: '20px', minWidth: '350px', minHeight: '300px', backgroundColor: 'rgba(0, 0, 0, 0.7)', display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap' }}>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2561.770168374606!2d19.94403051529857!3d50.053136579422564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b6a94e3a889%3A0x42b468145b2bccc9!2sMiodowa%2C%20Krak%C3%B3w!5e0!3m2!1spl!2spl!4v1574948878596!5m2!1spl!2spl" style={{ marginLeft: '20px', width: "400", height: "400", frameborder: "0" }} ></iframe>
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
    <Footer />
  </div>


const Header = () => <NavLink to='/' style={{ textShadow: '1px 1px rgba(0,0,0,.7)', textDecoration: 'none', fontSize: '36px', fontWeight: 'bold', margin: '20px', alignSelf: 'flex-start', color: 'white', paddingLeft: '20px' }}>
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

const Home = () =>
  <div style={{
    backgroundImage: `url(./images/big1.jpg)`,
    backgroundSize: 'cover', fontFamily: '"Roboto", sans-serif', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center'
  }}>
    <Header />
    <div style={{ maxWidth: "1280px" }}>
      <div style={{ boxShadow: '3px 3px 20px 0px rgba(0,0,0,1)', fontFamily: 'Monospace', fontSize: '30px', minWidth: '300px', height: '40vh', backgroundColor: 'rgba(0, 0, 0, 0.7)', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center' }}>
        <NavLink style={{ color: 'white', textDecoration: 'none' }} to='/gallery'>Gallery</NavLink>
        <NavLink style={{ color: 'white', textDecoration: 'none' }} to='/aboutme'>About Me</NavLink>
        <NavLink style={{ color: 'white', textDecoration: 'none' }} to='/contact'>Contact</NavLink>
      </div>
    </div>
    <Footer />
  </div>

const App = () => <HashRouter>
  <Route path='/:subpage' component={subPage} />
  <Route exact path='/' component={Home} />
</HashRouter>

ReactDOM.render(
  <App />, document.getElementById("app"));
