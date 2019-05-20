import React from 'react';
import NavMenu from './NavMenu';
import { Container, Header, Button, Divider, Icon, Image, Segment } from 'semantic-ui-react';
import {Grid, Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
import YouTube from 'react-youtube';
import '../gallery.css';

class Gallery extends React.Component {
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
    const images = [
      {
        original: require('../images/IMG1.jpeg'),
        thumbnail: require('../images/IMG1.jpeg')
      },
      {
        original: require('../images/IMG3.jpeg'),
        thumbnail: require('../images/IMG3.jpeg')
      },
      {
        original: require('../images/IMG4.jpeg'),
        thumbnail: require('../images/IMG4.jpeg')
      }
    ]
    const { activeItem, width, visible } = this.state;
    const isMobile = width <= 600;
    if (!isMobile ){
    return(
      <div>
        <div className='gal'>
          <div>
            <NavMenu />
          </div>
          <div className='galStyle'>
            <br />
            <Container>
              <ImageGallery items={images} />
            </Container>
            <br />
            <br />
            <div className="videosection">
              <Grid>
                <Row>
                  <Col xs="12" md="6">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/8dIFwTbC__g" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </Col>
                  <Col xs="12" md="6">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/L2LkX0xbJGU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </Col>
                </Row>
              </Grid>
            </div>
            <br />
            <br />
          </div>
        </div>
      </div>
    )
  }
    else {
      return (
      <div>
        <div className='gal'>
          <div>
            <NavMenu />
          </div>
          <div className='galStyle'>
            <br />
            <Container>
              <ImageGallery items={images} />
            </Container>
            <br />
            <br />
            <div className="Mobilevideosection">
              <Grid>
                <Row>
                  <Col xs="12">
                    <iframe width="380" height="200" src="https://www.youtube.com/embed/8dIFwTbC__g" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </Col>
                  <Col xs="12">
                    <br />
                    <br />
                  </Col>
                  <Col xs="12">
                    <iframe width="380" height="200" src="https://www.youtube.com/embed/L2LkX0xbJGU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </Col>
                </Row>
              </Grid>
            </div>
            <br />
            <br />
          </div>
        </div>
      </div>
    )}
  }
}

export default Gallery;
