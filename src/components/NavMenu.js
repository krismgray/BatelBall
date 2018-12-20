import React, { Component } from 'react';
import { Header, Menu, Image, Button, Icon, Sidebar, Divider } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import '../Home.css';

class NavMenu extends Component {
  state = { width: window.innerWidth, visible: false }

  handleResize() {
    this.setState({ width: window.innerWidth });
  }

  componentDidMOunt() {
    window.addEventListener('resize', this.handleResize())
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize());
  }

  toggleVisibility = () => this.setState({ visible: !this.state.visible });

  render() {
    const { activeItem, width, visible } = this.state;
    const isMobile = width <= 500;
    if (!isMobile ){
    return (
      <div>
      <br />
      <div className="navbar">
          <Link to="/">
            <div className='buttonpad'>
                <div className='logotext'>
                  <Image size='medium' src={require('../images/logowhite.png')} />
                </div>
            </div>
          </Link>
          <Link to="/">
            <div className='buttonpad'>
              <h2>HOME</h2>
            </div>
          </Link>
          <Link to="/HowToPlay">
            <div className='buttonpad'>
                <h2>HOW TO PLAY</h2>
            </div>
          </Link>
          <Link to='/CrowdFunding'>
            <div className='buttonpad'>
                <h2>CROWD FUNDING</h2>
            </div>
          </Link>
          <Link to='/MeetTheTeam'>
            <div className='buttonpad'>
                <h2>MEET THE TEAM</h2>
            </div>
          </Link>
          <Link to='/ContactUs'>
            <div className='buttonpad'>
                <h2>CONTACT US</h2>
            </div>
          </Link>
      </div>
      </div>
    )} else {
      return(
        <div>
          <div className='mobilemenu'>
            <div className='mobilemenu1'>
            <Button size='big' color='black' icon onClick={this.toggleVisibility}><Icon name='content' size='large' /></Button>
            </div>
            <br />
            <div className='mobilemenu2'>
              <Header as='h2' style={{ "text-decoration" : "underline" }}>Salon Beleza</Header>
            </div>
          </div>
          <br />
            <Sidebar as={Menu} animation='overlay' visible={visible} direction='top' vertical inverted>
              <Button secondary onClick={this.toggleVisibility}><Icon name='remove' size='large' /></Button>
            <Link to="/">
              <Button name='home' active={activeItem === 'home'} onClick={this.handleClick}>
                Home
              </Button>
            </Link>
            <Link to="/Stylists">
              <Button name='stylists' active={activeItem === 'stylists'} onClick={this.handleClick}>
                Stylists
              </Button>
            </Link>
              <Link to='Services'>
                <Button name='services' active={activeItem === 'services'} onClick={this.handleClick}>
                  Services
                </Button>
              </Link>
              <Link to='Contact'>
                <Button name='contact' active={activeItem === 'contact'} onClick={this.handleClick}>
                  Contact
                </Button>
              </Link>
          </Sidebar>
        </div>
      )
    }
  }
}

export default NavMenu;
