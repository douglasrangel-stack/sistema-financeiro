import React from 'react';

import { useTheme } from '../../hooks/theme';

import { useAuth } from '../../hooks/auth';

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
  MenuItemLink,
  MenuItemButton,
} from './styles';

const Aside: React.FC = () => {
  const {theme} = useTheme();
  const {signOut} = useAuth();
  return(
    <Container>
      <Header>
        <LogImg src={theme.colors.logo} alt="Sistema Financeiro - Douglas Rangel - WebMaster" />
      </Header>

      <MenuContainer>
        <MenuItemLink href="/">
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

        <MenuItemButton onClick={signOut}>
          <MdExitToApp/>
          Sair
        </MenuItemButton>
      </MenuContainer>
    </Container>
  );
}

export default Aside;