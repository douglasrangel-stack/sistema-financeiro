import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.main``;

export const Filters = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  .tag-filter {
    font-size: 18px;
    font-weight: 500;
    background: none;
    color: ${props => props.theme.colors.white};

    margin: 0 10px;
    transition: all ease-in-out 0.3s;
    opacity: 0.5;

    &:hover {
      opacity: 0.7;
    }

    &::after {
      content: '';
      display: block;
      width: 55px;
      margin: 5px auto 0;
    }
    &.tag-filter-recurrent {
      &::after {
        border-bottom: 10px solid ${props => props.theme.colors.success};
      }
    }
    &.tag-filter-eventual {
      &::after {
        border-bottom: 10px solid ${props => props.theme.colors.warning};
      }
    }

    &.tag-actived {
      opacity: 1;
    }

  }
`;