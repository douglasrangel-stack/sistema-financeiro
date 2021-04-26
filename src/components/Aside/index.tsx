import React from 'react';

import {
  MdDashboard,
  MdArrowDownward,
  MdArrowUpward,
  MdExitToApp
} from 'react-icons/md';

import logoImg from '../../assets/logo.png';

import { 
  Container,
  Header,
  LogImg,
  MenuContainer,
  MenuItemLink
} from './styles';

const Aside: React.FC = () => {
  return(
    <Container>
      <Header>
        <LogImg src={logoImg} alt="Sistema Financeiro - Douglas Rangel - WebMaster" />
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