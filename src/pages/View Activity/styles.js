import styled from 'styled-components';
import { Paper } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const CalendarIcon = styled(FontAwesomeIcon)`
  margin: 0 5px;
  color: #3cb371;
`;

export const Container = styled(Paper)`
  padding: 5px;
`;

export const Wrapper = styled.div`
  /* display: grid;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  margin: 5px; */
  display: grid; /* 1 */
  grid-gap: 10px; /* 3 */
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: minmax(10px, auto);
`;
