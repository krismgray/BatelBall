import React from 'react';
import NavMenu from './NavMenu';
import {Grid, Row, Col} from 'react-bootstrap';
import { Image } from 'semantic-ui-react';
import '../Team.css';

class MeetTheTeam extends React.Component {
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

  render() {
    const { activeItem, width, visible } = this.state;
    const isMobile = width <= 600;
    if (!isMobile ){
    return(
      <div>
        <NavMenu />
        <br />
        <br />
        <div className='Team1'>
          <p>Meet the team that is bringing you your new favorite hobby!
            We like long walks on the beach, camping, watching movies while eating
            ice cream, and of course.... Batell Ball!
          </p>
        </div>
        <br />
        <br />
        <br />
        <div className='Team2'>
          <Grid>
            <Row>
              <Col xs={16} md={6}>
                <div className='bio'>
                </div>
                <h3>Richard Lossing</h3>
                <p>President/Founder/Artist/Creative Powerhouse</p>
              </Col>
              <Col xs={16} md={6}>
                <div className='bio2'>
                </div>
                <h3>Loel Green</h3>
                <p>San Luis Obispo, CA</p>
                <p>CEO/CO-Founder/Game Engineer/Artist</p>
              </Col>
            </Row>
            <br />
            <br />
            <br />
            <br />
            <Row>
              <Col xs={16} md={6}>
                <div className='bio3'>
                </div>
                <h3>Daniel Green</h3>
                <p>Product Design Engineer/Materials Consultant</p>
              </Col>
              <Col xs={16} md={6}>
                <div className='bio4'>
                </div>
                <h3>Kris Gray</h3>
                <p>Web Design</p>
              </Col>
            </Row>
          </Grid>
        </div>
        <br />
        <br />
        <br />
      </div>
    )
  }
  else {
    return (
      <div>
        <NavMenu />
        <div className='Team1'>
          <p>Meet the team that is bringing you your new favorite hobby!
            We like long walks on the beach, camping, watching movies while eating
            ice cream, and of course.... Batell Ball!
          </p>
        </div>
        <br />
        <div className='Team2'>
          <Grid>
            <Row>
              <Col xs={16} md={6}>
                <div className='bio'>
                </div>
                <h3>Richard Lossing</h3>
                <p>President/Founder/Artist/Creative Powerhouse</p>
                <br />
              </Col>
              <Col xs={16} md={6}>
                <div className='bio2'>
                </div>
                <h3>Loel Green</h3>
                <p>San Luis Obispo, CA</p>
                <p>CEO/CO-Founder/Game Engineer/Artist</p>
                <br />
              </Col>
              <Col xs={16} md={6}>
                <div className='bio3'>
                </div>
                <h3>Daniel Green</h3>
                <p>Product Design Engineer/Materials Consultant</p>
                <br />
              </Col>
              <Col xs={16} md={6}>
                <div className='bio4'>
                </div>
                <h3>Kris Gray</h3>
                <p>Web Design</p>
              </Col>
            </Row>
          </Grid>
        </div>
        <br />
        <br />
        <br />
      </div>
      )
    }
  }
};

export default MeetTheTeam;
