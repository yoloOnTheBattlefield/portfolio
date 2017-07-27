import React from 'react';
import Scroll from 'react-scroll';
import {
  ProjectsWrapper
} from './Projects.styles';

const Element = Scroll.Element;

export default class Projects extends React.Component{
  render() {
    return (
      <Element name='projects'>
        <ProjectsWrapper>
          
        </ProjectsWrapper>
      </Element>
    );
  }
}
