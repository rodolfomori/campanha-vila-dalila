import styled from 'styled-components';
import { Paper } from '@material-ui/core';

export const Container = styled(Paper)``;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 5px;
  margin: 5px;
`;
