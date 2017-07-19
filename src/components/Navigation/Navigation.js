import React from 'react';
import HeadRoom from 'react-headroom';
import Scroll from 'react-scroll';
import mojs from 'mo-js'
import {
  Navigation,
  NavigationList,
  NavigationItem
} from './Navigation.styles';

const Link = Scroll.Link;


export default class Hero extends React.Component {
  burst = new mojs.Burst({
    left: 0, top: 0,
  radius:   { 4: 19 },
  angle:    45,
  children: {
    shape:        'line',
    radius:       3,
    scale:        1,
    stroke:       '#B8336A',
    strokeDasharray: '100%',
    strokeDashoffset: { '-100%' : '100%' },
    duration:     700,
    easing:       'quad.out',
  }
  });

  componentDidMount(){
    document.addEventListener( 'click' , (e) => {
       this.burst
           .tune({ x: e.pageX, y: e.pageY })
           .replay();
    });
  }

  render() {
    return (
      <HeadRoom>
        <Navigation>
          <NavigationList>
            <NavigationItem onClick={(e) => this.handleClick(e)}><Link to='home'>Home</Link></NavigationItem>
            <NavigationItem><Link to='projects'>Projects</Link></NavigationItem>
            <NavigationItem><Link to='contact'>Contact</Link></NavigationItem>
          </NavigationList>
        </Navigation>
      </HeadRoom>
    );
  }
}
