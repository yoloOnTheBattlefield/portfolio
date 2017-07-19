import React from 'react';
import Scroll from 'react-scroll';
import {
  HeroWrapper,
  HeroNav,
  Header,
  Bold,
  Border,
  ArrowDown,
} from './Hero.styles';

const Element = Scroll.Element;
const Link = Scroll.Link;

export default class Hero extends React.Component {
  render() {
    return (
      <Element name='home'>
        <HeroWrapper>
          <HeroNav>
              cristianflorea1110[at]yahoo.com
               <Link to='contact'>contact</Link>
          </HeroNav>
          <Header>
            <Bold>Creative</Bold> <Border>Web Developer</Border> Based In London <br />
            <Border>I Write Code And Build Cool Stuff</Border>
          </Header>
          <ArrowDown />
        </HeroWrapper>
      </Element>
    );
  }
}
