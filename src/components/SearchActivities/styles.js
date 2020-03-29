import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Paper } from '@material-ui/core';
import Select from 'react-select';
import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: ${props => (props.act ? 'repeat(2, 47%)' : '1fr')};
  justify-content: start;
  margin-left: 10px;

  ${props =>
    (!props.act || props.act.length === 0) &&
    css`
      p {
        font-size: 20px;
        text-align: center;
        max-width: 350px;
      }
    `}
`;

export const WrapperSelect = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CalendarIcon = styled(FontAwesomeIcon)`
  margin: 0 5px;
  color: #3cb371;
`;

export const Container = styled(Paper)`
  padding: 5px;
`;

export const WrapperButtons = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 20px 5px;
  button {
    padding: 5px;
    background-color: white;
    border-radius: 5px;
    width: 25%;
  }
`;

export const Search = styled.div`
  display: flex;
  margin: 7px;
  align-items: center;
  input {
    width: 80%;
    padding: 7px;
    margin: 7px;
    border-radius: 5px;
  }
  button {
    background-color: red;
    padding: 7px;
    border-radius: 5px;
    height: 34px;
  }
`;

export const SelectStyle = styled(Select)`
  color: black;
  cursor: pointer !important;
  width: 95%;
  margin: 10px;
  max-width: 350px;
`;
