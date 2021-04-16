import styled from 'styled-components';

interface ITitleProps {
  lineColor: string;
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
  
`;

export const Title = styled.div<ITitleProps>`
  > h1 {
    &::after {
      content: '';
      display: block;
      width: 55px;
      border-bottom: 10px solid ${props => props.lineColor};
    }
  }
`;

export const Controllers = styled.div`
    display: flex;
`;