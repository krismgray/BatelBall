import React from 'react';
import NavMenu from './NavMenu';
import { Button, Form, Input, TextArea, Container, Icon} from 'semantic-ui-react';
import ContactForm from './ContactForm';
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
          <ContactForm />
          <br />
          <div className='title'>
            <p>HAVE ANY QUESTIONS?</p>
          </div>
          <br />
          <div className='body'>
            <div>
              <p>Reach out to us with the email form above or through social media! Click on the one of the links below to get in touch!</p>
            </div>
            <br />
            <div>
              <a href="https://www.instagram.com/batellball/">
                <Icon color='black' name='instagram' size='big' />
              </a>
              <a href="https://www.facebook.com/batellball/">
                <Icon color='black' name='facebook' size='big' />
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ContactUs;
