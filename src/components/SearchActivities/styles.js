import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Paper } from '@material-ui/core';
import Select from 'react-select';
import styled, { css } from 'styled-components';
import { darken } from 'polished';
import TextInputMask from 'react-masked-text';

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
  align-items: center;
  justify-content: center;
  margin: 10px;
  margin-top: 30px;
  input {
    min-height: 38px;
    max-width: 313px;
    width: 88%;
    border-radius: 3px;
    border: 1px solid #ccc;
    padding: 7px;
  }
  button {
    border: 1px solid #3b9eff;
    padding: 9px;
    border-radius: 3px;
    background: #3b9eff;

    &:hover {
      background: ${darken(0.03, '#3b9eff')};
    }

    &:active {
      background: ${darken(0.03, '#3b9eff')};
    }
  }
`;
export const SearchIcon = styled(FontAwesomeIcon)`
  color: white;
`;

export const SelectStyle = styled(Select)`
  color: black;
  cursor: pointer !important;
  width: 95%;
  margin: 10px;
  max-width: 350px;
`;

export const InputStyleMask = styled(TextInputMask)`
  /* @media (max-width: 600px) {
    width: 90%;
  } */
  min-height: 38px;
    max-width: 313px;
    width: 88%;
    border-radius: 3px;
    border: 1px solid #ccc;
    padding: 7px;
  color: rgba(0, 0, 0);
  &::placeholder {
    color: #999;
  }
`;
