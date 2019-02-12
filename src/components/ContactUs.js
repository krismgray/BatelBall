import React from 'react';
import NavMenu from './NavMenu';
import { Button, Form, Input, TextArea, Container, Icon} from 'semantic-ui-react';
import '../Contact.css';

class ContactUs extends React.Component {
  state = { first: '', last: '', email: '', message: ''}

  handleChange = (type, val) => {
  this.setState({ [type]: val});
  }

  setMessage = (e) => {
    this.setState({ message: e.target.value });
  }

  setFirst = (e) => {
    this.setState({ first: e.target.value });
  }

  setLast = (e) => {
    this.setState({ last: e.target.value });
  }

  setEmail = (e) => {
    this.setState({ email: e.target.value });
  }

  handleSubmit = () => {

  }

  render() {
    const { first, last, email, message, value } = this.state;
    return(
      <div>
        <NavMenu />
        <div className='backcolor'>
          <br />
          <br />
          <br />
          <Container>
            <div className='FormContact'>
              <Form size='big'>
                <Form.Group widths='equal'>
                  <Form.Input fluid label='First name'
                              placeholder='First Name'
                              name="first"
                              onChange={this.handleChange}
                              />
                  <Form.Input fluid label='Last name'
                              placeholder='Last Name'
                              name="last"
                              onChange={this.handleChange}
                              />
                  <Form.Input fluid label='Email'
                              placeholder='Email'
                              name="email"
                              onChange={this.handleChange}
                              />
                </Form.Group>
                <Form.TextArea label='About'
                              placeholder='What can we help you with today?'
                              name="message"
                              onChange={this.handleChange}
                              />
                <Form.Button onSubmit={this.handleSubmit}>Submit</Form.Button>
              </Form>
            </div>
          </Container>
          <br />
          <div className='title'>
            <p>HAVE ANY QUESTIONS?</p>
          </div>
          <br />
          <div className='body'>
            <div>
              <p>Reach out to us via email or social media. Click on the Links below to get in touch!</p>
              <a href="mailto:info@batellball.com">
                info@batellball.com
              </a>
            </div>
            <br />
            <div>
              <a href="https://www.instagram.com/batellball/">
                <Icon color='black' name='instagram' size='big' />
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ContactUs;
