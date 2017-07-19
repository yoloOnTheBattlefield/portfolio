import styled from 'styled-components';
import { tablet, phone } from '../theme/sizes';

export const Name = styled.div`
  position: fixed;
  color: #999;
  bottom: 50px;
  left: 50px;
  font-size: 35px;
  font-family: 'Poiret One', cursive;
  @media (max-width: ${tablet}px){
    transform: rotate(-90deg);
    left: -30px;
    bottom: 105px;
    font-size: 25px;
  }
  @media (max-width: ${phone}px){
    font-size: 20px;
  }
`;

/*
  transform: rotate(-90deg);
  left: -30px;
  bottom: 105px;
  font-size: 20px;
*/
