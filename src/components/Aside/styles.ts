import styled from 'styled-components';

export const Container = styled.div`
      grid-area: AS;
      color: ${props => props.theme.colors.white};
      background-color: ${props => props.theme.colors.secondary};
      padding: 0 20px;
      border-right: 1px solid ${props => props.theme.colors.gray};
`;

export const Header = styled.header`
      height: 70px;
      display: flex;
      align-items: center;
`;

export const LogImg = styled.img`

`;

export const MenuContainer = styled.nav`
      display: flex;
      flex-direction: column;
      margin-top: 50px;
`;

export const MenuItemLink = styled.a`
      color: ${props => props.theme.colors.white};
      text-decoration: none;
      transition: all ease-in-out 0.3s;
      margin: 7px 0;
      display: flex;
      align-items: center;
      &:hover {
            opacity: 0.7;
      }
      > svg {
            font-size: 18px;
            margin-right: 5px;
            color: ${props => props.theme.colors.info};
      }
`;