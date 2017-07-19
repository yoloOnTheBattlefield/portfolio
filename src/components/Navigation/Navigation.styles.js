import styled from 'styled-components';

export const Navigation = styled.nav`
  width: 200px;
  height: 200px;
`;


export const NavigationList = styled.ul`
  width: 100%;
  height: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const NavigationItem = styled.li`
  height: 30px;
  padding-left: 50px;
  font-size: 20px;
  line-height: 25px;
  background: black;
  position: relative;
  cursor: pointer;
  color: rgba(255,255,255, 0.9);
  transition: 0.2s;
  &:hover{
    color: rgba(255,255,255, 1);
  }
  &:first-letter {
    font-size: 25px;
  }
  &:after{
    content: '';
    position: absolute;
    width: 20px;
    height: 1px;
    top: 15px;
    transform: translatex(-100%);
    background: white;
    transition: 0.2s;
  }
  &:hover:after{
    transform: translatex(0%);
  }
`;
