import React from 'react';
import NavMenu from './NavMenu';
import { Header, Menu, Image, Button, Icon, Sidebar, Divider } from 'semantic-ui-react';
import '../HowToPlay.css';

class HowToPlay extends React.Component {
  render() {
    return(
      <div>
        <NavMenu />
        <br />
        <br />
        <div className='howto1'>
          <h2>Pickleball Court rules</h2>
          <ul>
            <li>The game starts with a coin toss (or other means) to determine which player serves first and which side they want to serve from.
              Keep in mind points can only be made when opposing the server.</li><br />
            <li>The server must serve from anywhere outside of the players box, at the end of the court.
              The server is required to bounce the ball outside the players box and successfully hit it into the other players box.
              Failure to make it across “No Mans Land” and into the others players box, results in a fault.
              Two faults in a row awards the other player a point and the server must still serve.
              Two more faults in a row and another point is awarded to the opposing player etc.
            </li><br />
            <li>The receiver may stand where they wish outside their players box upon receipt of the serve. </li>
            <Image centered size='big' src={require('../images/pickleball.png')} />
            <li>Once a serve has been made the amount of shots between the players can be unlimited.
              A point is won by hitting the ball so the server fails to return it successfully.
              When the player opposite the server fails to successfully return the ball no point is awarded the server.
              Service is then transferred to the other player and the former can now score points.</li><br />
            <li>At no point can a player step into “No Mans Land” during play.
              A player can move outside the players box on all other sides without issue.</li><br />
            <li>A ball landing on the “No Mans Land” line is out.
              The outside lines of the players box are still considered “In” </li><br />
            <li>5 points wins a round.  3 out of 5 rounds wins a game.</li><br />
            <li>The ball can hit any part of the line for the point to be called in, outside the line and the ball is out.</li><br />
          </ul>
          <br />
          <br />
            <h2>Racquetball Court rules</h2>
            <ul>
              <li>The game starts with a coin toss (or other means) to determine which player serves first and which side they want to serve from.
                Keep in mind points can only be made when opposing the server.</li><br />
              <li>The server must serve from the back half of the players box.
                The server is required to bounce the ball and successfully hit it into the other players box.
                Failure to make it across “No Mans Land” and into the others players box, results in a fault.
                Two faults in a row awards the other player a point and the server must still serve.
                Two more faults in a row and another point is awarded to the opposing player etc.
              </li><br />
              <li>The receiver may stand where they wish inside their players box upon receipt of the serve.</li>
              <Image centered size='big' src={require('../images/racquetball.png')} />
              <li>Once a serve has been made the amount of shots between the players can be unlimited.
                A point is won by hitting the ball so the server fails to return it successfully.
                When the player opposite the server fails to successfully return the ball no point is awarded the server.
                Service is then transferred to the other player and the former can now score points.</li><br />
              <li>At no point can a player step into “No Mans Land” during play.</li><br />
              <li>A ball landing on the “No Mans Land” line is out.</li><br />
              <li>On a racquetball court the wall are playable!!
                While the walls are fair game, a hit to anothers players box must allow for at least two bounces on the floor.</li><br />
              <li>5 points wins a round.  3 out of 5 rounds wins a game.</li>
              <li>The ball can hit any part of the line for the point to be called in, outside the line and the ball is out.</li><br />
            </ul>
        </div>
      </div>
    )
  }
}

export default HowToPlay;
