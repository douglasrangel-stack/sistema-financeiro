import styled from 'styled-components';

import bg from '../../assets/bg.jpg';

export const Container = styled.div`
    height: 100vh;
    
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: url(${bg}) center/cover no-repeat;
    position: relative;

    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.5);
    }

    //background-color: ${props => props.theme.colors.primary};
`;

export const Logo = styled.img`
      width: 220px;
      margin-bottom: 20px;
      display: inline-block;
`;

export const Form = styled.form`
    width: 300px;
    height: 300px;

    padding: 30px;

    border-radius: 5px;
    text-align: center;

    background-color: #000;
    position: relative;
    z-index: 2;
`;

