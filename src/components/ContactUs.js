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
    return(
      <div>
        <NavMenu />
        <Container>
          <form action="mailto:kris.m.gray@gmail.com" method="post">
            <div className='contactUsForm'>
              <div className='formEntry'>
                <label for="first_name">First Name *</label>
                <br />
                <input  type="text" name="first_name" maxlength="50" size="100"/>
              </div>
              <div className='formEntry'>
                <label for="last_name">Last Name *</label>
                <br />
                <input  type="text" name="last_name" maxlength="50" size="100"/>
              </div>
              <div className='formEntry'>
                <label for="email">Email Address *</label>
                <br />
                <input  type="text" name="email" maxlength="80" size="100"/>
              </div>
              <div className='formEntry'>
                <label for="telephone">Telephone Number</label>
                <br />
                <input  type="text" name="telephone" maxlength="30" size="100"/>
              </div>
              <br />
              <div className='formEntryEnd'>
                <label for="comments">Comments *</label>
                <br />
                <textarea  name="comments" maxlength="1000" cols="50" rows="8" size="100"></textarea>
              </div>
              <div className='formEntryEnd'>
                <input type="submit" value="Submit" size="100"/>
              </div>
            </div>
          </form>
        </Container>
      </div>
    )
  }
}

export default ContactUs;
