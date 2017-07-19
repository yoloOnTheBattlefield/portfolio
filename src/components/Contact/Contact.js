import React from 'react';
import Scroll from 'react-scroll';
import {
  ContactWrapper
} from './Contact.styles';
const Element = Scroll.Element;

export default class Contact extends React.Component{
  render() {
    return (
      <Element name='contact'>
        <ContactWrapper />
      </Element>
    );
  }
}
