import React from 'react';
import NavMenu from './NavMenu';
import { Container, Header, Button, Divider, Icon, Image, Segment, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
import YouTube from 'react-youtube';
import '../gallery.css';

class Gallery extends React.Component {


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
                <Grid.Row columns={2}>
                  <Grid.Column>
                    <iframe width="500" height="300" src="https://www.youtube.com/embed/U9t-slLl30E" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </Grid.Column>
                  <Grid.Column>
                    <iframe width="500" height="300" src="https://www.youtube.com/embed/U9t-slLl30E" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Gallery;
