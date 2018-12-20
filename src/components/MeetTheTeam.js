import React from 'react';
import NavMenu from './NavMenu';
import {Grid, Row, Col} from 'react-bootstrap';
import { Image } from 'semantic-ui-react';
import '../Team.css';

class MeetTheTeam extends React.Component {
  render() {
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
                  <Image centered size='medium' src={require('../images/Richard.jpg')} />
                </div>
                <h3>Richard Lossing</h3>
                <p>President/Founder/Artist/Creative Powerhouse</p>
              </Col>
              <Col xs={16} md={6}>
                <div className='bio'>
                  <Image centered size='medium' src={require('../images/Loel.jpg')} />
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
                <div className='bio'>
                  <Image centered size='medium' src={require('../images/person1.png')} />
                </div>
                <h3>Daniel Green</h3>
                <p>Product Design Engineer/Materials Consultant</p>
              </Col>
              <Col xs={16} md={6}>
                <div className='bio'>
                  <Image centered bordered size='medium' src={require('../images/person4.png')} />
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

export default MeetTheTeam;
