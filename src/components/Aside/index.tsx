import React from 'react';

import { useTheme } from '../../hooks/theme';

import {
  MdDashboard,
  MdArrowDownward,
  MdArrowUpward,
  MdExitToApp
} from 'react-icons/md';

import { 
  Container,
  Header,
  LogImg,
  MenuContainer,
  MenuItemLink
} from './styles';

const Aside: React.FC = () => {
  const {theme} = useTheme();
  return(
    <Container>
      <Header>
        <LogImg src={theme.colors.logo} alt="Sistema Financeiro - Douglas Rangel - WebMaster" />
      </Header>

      <MenuContainer>
        <MenuItemLink href="/dashboard">
          <MdDashboard/>
          Dashboard
        </MenuItemLink>

        <MenuItemLink href="/list/entry-balance">
          <MdArrowUpward/>
          Entradas
        </MenuItemLink>

        <MenuItemLink href="/list/exit-balance">
          <MdArrowDownward/>
          Saídas
        </MenuItemLink>

        <MenuItemLink href="#">
          <MdExitToApp/>
          Sair
        </MenuItemLink>
      </MenuContainer>
    </Container>
  );
}

export default Aside;