import styled from 'styled-components';

export const HeroWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  margin-top: -200px;
  background: black;
  box-shadow: 0 50px 50px #666;
`;

export const HeroNav = styled.div`
  height: 50px;
  font-size: 20px;
  position: absolute;
  color: rgba(255,255,255,0.8);
  top: 350px;
  right: -50px;
  z-index: 999;
  transform: rotate(90deg);
  overflow: hidden;
  a{
    color: #B8336A;
    padding-left: 10px;
    cursor: pointer;
    position: relative;

    &:after{
      position: absolute;
      content: '';
      width: 100%;
      height: 1px;
      top: 50%;
      background: #B8336A;
      transform: translatex(-100%);
      transition: 0.2s;
    }
    &:hover:after{
      transform: translatex(0%);
    }
`;



export const Header = styled.h1`
  position: absolute;
  max-width: 550px;
  height: 70px;
  color: rgba(255,255,255, 0.8);
  padding: 0;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  font-size: 30px;
  text-align: center;
  padding: 0 50px;
`;

export const Border = styled.span`
  position: relative;
  z-index: 2;
  font-size: 35px;
  padding: 0 5px;
  color: white;
  &:before{
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 10px;
    background-color: #999;
    z-index: -1;
  }
`;

export const Bold = styled.span`
  font-size: 40px;
  padding-right: 20px;
`;

export const ArrowDown = styled.div`
  position: absolute;
  width: 100vw;
  height: 100px;
  bottom: 0;
  left: 0;
  &:before{
    content: '';
    position: absolute;
    width: 1px;
    height: 100%;
    background: white;
    left: 0;
    right: 0;
    margin: auto;
  }
`;
