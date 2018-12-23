import React from 'react';
import NavMenu from './NavMenu';
import { Header, Menu, Image, Button, Icon, Sidebar, Divider } from 'semantic-ui-react';
import {Grid, Row, Col} from 'react-bootstrap';


class Home extends React.Component {
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
    const isMobile = width <= 500;
    if (!isMobile ){
    return (
      <div>
        <NavMenu />
        <br />
        <div className='Body1'>
          <Image fluid src={require('../images/position.jpg')} />
        </div>
        <br />
        <p className='Body2'>Batell Ball is the new innovation in paddle sports created here in San Luis Obispo!
          It is the Worlds First Dual-Head Paddle Sport!  The game can be played on both pickleball and racquetball courts.
          A no rally zone separates two players armed with a double ended paddle.  The game is played without a net.
          The two ended paddle, combined with the
          lack of net, make for an unexpected change in game mechanics from games like tennis or pickleball.
          It is a whole new ball game!  Bring both hands, you will need them!
        </p>
        <br />
        <div className='Body2'>
          <p>If you haven't tried it, YES, it's as fun as it looks.
            And while we admit to being biased, anything from a lazy day at the beach to a "let's keep score"
          competitive session with friends (and arch enemies) is better with Batell Ball.</p>
        </div>
        <br />
        <div className='Body3'>
          <Button fluid color='black' size='huge'>LEARN TO PLAY</Button>
          <div style={{'padding-left' : '30px', 'padding-right' : '30px'}}>
            <Image size='small' src={require('../images/paddles.png')} />
          </div>
          <Button fluid color='black' size='huge'>PURCHASE</Button>
        </div>
        <br />
        <br />
        <div className='Body4'>
          <div className='picStyle'>
            <Image size='medium' src={require('../images/pic.jpg')} />
          </div>
          <div className='picStyle'>
            <Image size='medium' src={require('../images/pic.jpg')} />
          </div>
          <div className='picStyle'>
            <Image size='medium' src={require('../images/pic.jpg')} />
          </div>
        </div>
        <br />
        <br />
        <div className='Body5'>
          <p>Only 2 players required and you can play anywhere: backyard, campground, beach, gym floor, you name it.
            Once players get a feel for the Paddles (1 hour) solid rallies, backhands and celebratory high fives quickly follow.
          </p>
          <br />
          <p>But that doesn't mean the game is easy to master. Some competitive players practive year round and compete in the Batell Ball League!</p>
        </div>
        <br />
        <br />
        <div className='Body6'>
          <div className='picStyle'>
            <h1>RALLY PACK</h1>
            <Image size='large' src={require('../images/Pack.png')} />
          </div>
          <div className='picStyle'>
            <h1>MERCH</h1>
            <Image size='large' src={require('../images/Merch.png')} />
          </div>
        </div>
      </div>
    )}
    else {
      return (
        <div>
          <NavMenu />
          <div className='Body1'>
            <Image fluid src={require('../images/position.jpg')} />
          </div>
          <br />
          <p className='MobileBody2'>Batell Ball is the new innovation in paddle sports created here in San Luis Obispo!
            It is the Worlds First Dual-Head Paddle Sport!  The game can be played on both pickleball and racquetball courts.
            A no rally zone separates two players armed with a double ended paddle.  The game is played without a net.
            The two ended paddle, combined with the
            lack of net, make for an unexpected change in game mechanics from games like tennis or pickleball.
            It is a whole new ball game!  Bring both hands, you will need them!
          </p>
          <br />
          <div className='MobileBody2'>
            <p>If you haven't tried it, YES, it's as fun as it looks.
              And while we admit to being biased, anything from a lazy day at the beach to a "let's keep score"
            competitive session with friends (and arch enemies) is better with Batell Ball.</p>
          </div>
          <br />
          <div className='MobileBody3'>
            <Grid>
              <Row>
                <Col xs='12'>
                  <Button fluid color='black' size='large'>LEARN TO PLAY</Button>
                </Col>
              </Row>
              <br />
              <Row>
                <Col xs='12'>
                  <Button fluid color='black' size='large'>PURCHASE</Button>
                </Col>
              </Row>
            </Grid>
          </div>
          <br />
          <br />
          <div className='Body4'>
            <div className='picStyle'>
              <Image size='medium' src={require('../images/pic.jpg')} />
            </div>
          </div>
          <br />
          <br />
          <div className='MobileBody5'>
            <p>Only 2 players required and you can play anywhere: backyard, campground, beach, gym floor, you name it.
              Once players get a feel for the Paddles (1 hour) solid rallies, backhands and celebratory high fives quickly follow.
            </p>
            <br />
            <p>But that doesn't mean the game is easy to master. Some competitive players practive year round and compete in the Batell Ball League!</p>
          </div>
          <br />
          <br />
          <div className='Body6'>
            <div className='picStyle'>
              <h1>RALLY PACK</h1>
              <Image size='large' src={require('../images/Pack.png')} />
            </div>
            <div className='picStyle'>
              <h1>MERCH</h1>
              <Image size='large' src={require('../images/Merch.png')} />
            </div>
          </div>
        </div>
      )
    }
  }
}

export default Home;
