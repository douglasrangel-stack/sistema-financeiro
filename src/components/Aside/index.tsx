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
        <MenuItemLink href="#">
          <MdDashboard/>
          Dashboard
        </MenuItemLink>

        <MenuItemLink href="#">
          <MdArrowUpward/>
          Entradas
        </MenuItemLink>

        <MenuItemLink href="#">
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