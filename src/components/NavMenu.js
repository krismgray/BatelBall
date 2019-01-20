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
    const isMobile = width <= 600;
    if (!isMobile ){
    return (
      <div>
      <br />
      <div className="navbar">
          <Link to="/">
            <div className='buttonpad'>
                <div className='logotext'>
                  <Image size='large' src={require('../images/logowhite.png')} />
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
            <Button size='big' icon onClick={this.toggleVisibility}><Icon name='content' size='large' /></Button>
            <Link to='/'>
              <Image size='medium' src={require('../images/logowhite.png')} />
            </Link>
            </div>
            <br />
          </div>
          <br />
            <Sidebar as={Menu} animation='overlay' visible={visible} direction='top' vertical inverted>
              <Button secondary onClick={this.toggleVisibility}><Icon name='remove' size='large' /></Button>
            <Link to="/">
              <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleClick}>
                HOME
              </Menu.Item>
            </Link>
            <Link to="/HowToPlay">
              <Menu.Item name='stylists' active={activeItem === 'stylists'} onClick={this.handleClick}>
                HOW TO PLAY
              </Menu.Item>
            </Link>
              <Link to='/MeetTheTeam'>
                <Menu.Item name='services' active={activeItem === 'services'} onClick={this.handleClick}>
                  MEET THE TEAM
                </Menu.Item>
              </Link>
              <Link to='ContactUs'>
                <Menu.Item name='contact' active={activeItem === 'contact'} onClick={this.handleClick}>
                  CONTACT US
                </Menu.Item>
              </Link>
          </Sidebar>

        </div>
      )
    }
  }
}

export default NavMenu;
