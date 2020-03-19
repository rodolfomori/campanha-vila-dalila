import styled from 'styled-components';
import { darken } from 'polished';
import { Form, Input, Check } from '@rocketseat/unform';
import Select from 'react-select';
import { Paper, TextField } from '@material-ui/core';
import { Calendar } from 'primereact/calendar';
import TextInputMask from 'react-masked-text';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const BackButton = styled(FontAwesomeIcon)`
  font-size: 30px;
  margin: 10px 5px 0 5px;
`;

export const BackContainer = styled.div`
  margin-left: 20px;
  display: flex;
  align-items: center;
  width: fit-content;
  p {
    margin: 0;
    margin-top: 10px;
    font-weight: bold;
    font-size: 20px;
  }
`;

export const FormStyle = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  margin: 0;

  button {
    margin: 40px 0;
    height: 44px;
    background: #3b9eff;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;
    width: 60%;
    max-width: 450px;
    min-width: 270px;
    @media (max-width: 600px) {
      width: 95%;
    }

    &:hover {
      background: ${darken(0.03, '#3b9eff')};
    }
  }
`;

export const InputStyleMask = styled(TextInputMask)`
  /* @media (max-width: 600px) {
    width: 90%;
  } */
  width: 100%;
  border: 1.4px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  height: 44px;
  padding: 0 15px;
  color: rgba(0, 0, 0);
  margin: 0 0 10px;
  &::placeholder {
    color: #999;
  }
`;

export const InputStyle = styled(Input)`
  /* @media (max-width: 600px) {
    width: 90%;
  } */
  width: 100%;
  border: 1.4px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  height: 44px;
  padding: 0 15px;
  color: rgba(0, 0, 0);
  margin: 0 0 10px;
  &::placeholder {
    color: #999;
  }

  .textArea {
    height: 200px !important;
    padding: 5px 10px;
  }
`;

export const TextStyle = styled(Input)`
  /* @media (max-width: 600px) {
    width: 90%;
  } */
  width: 100%;
  border: 1.4px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  height: 130px;
  padding: 0 15px;
  color: rgba(0, 0, 0);
  margin: 0 0 10px;
  &::placeholder {
    color: #999;
  }
`;

export const Container = styled(Paper)`


  margin:auto;

  margin-top:30px;
  display: flex;
  flex-direction: column;
  padding: 24px;
  width: 60%;
  max-width: 450px;
  min-width: 270px;

  @media(min-width:600px){
    align-content:center;
    align-items: center;
  }

   @media (max-width: 600px) {
    width: 95%;
  }

  h1 {

    font-family: Roboto,Arial,sans-serif;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: .1px;
    line-height: 24px;
    color: #202124;
    width: 100%;
    word-break: break-word;
  }
  p{
    font-size: 13px;
    font-weight: 400;
    letter-spacing: .3px;
    line-height: 16px;
    color: #202124;
    line-height: 135%;
    margin-top: 4px;
    width: 100%;
  }
  span {
    color: #fb6f65;
    align-self: flex-start;
    text-align: center;
    margin: 0 0 10px;
    font-weight: bold;
  }
  button {

    margin: 5px 0 0;
    height: 44px;
    background: #3b9eff;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;
    &:hover {
      background: ${darken(0.03, '#3b9eff')};
    }
  }

  .checks{
    display: flex;
    flex-direction: row;
    align-items: center;

    p{
      font-size:20px;
      color: color: rgba(0, 0, 0);
      margin:0;
      margin-left:20px;
    }
  }
`;

export const CheckWraper = styled.div`
  display: flex;
  align-items: center;
  p {
    margin: 0;
    font-size: 20px;
    font-weight: bold;
  }
`;

export const CheckAdmin = styled(Check)`
  font-size: 30px;
  margin: 35px;
`;

export const Date = styled(TextField)``;

export const SelectStyle = styled(Select)`
  color: black;
  cursor: pointer !important;
  width: 100%;
`;

export const CalendarStyle = styled(Calendar)`
  th {
    span {
      color: #3b9eff;
    }
  }
  input {
    width: 100%;
    border: 1.4px solid rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    height: 44px;
    &:hover {
      border: 1.4px solid rgba(0, 0, 0, 0.1) !important;
    }
  }

  span {
    margin: 0;
    padding: 0;
    color: black;
    height: 44px;
  }

  button {
    margin: 0;
    padding: 0;
    width: 20%;
    max-width: 70px;
    min-width: 50px;
  }
  .pi-calendar:before {
    color: white;
    font-size: 40px;
    font-weight: 100;
    position: relative;
    bottom: 8px;
    right: 9px;
  }

  .pi-chevron-right:before {
    color: white;
  }
  .pi-chevron-left:before {
    color: white;
  }

  .p-datepicker-buttonbar {
    display: flex;
    flex: 1;
    justify-content: center;
    justify-items: center;
    span {
      background-color: #3b9eff;
      color: white;
      border-radius: 5px;
      font-size: 19px;
    }
  }

  .p-button.p-component.p-button-secondary.p-button-text-only {
    width: 100%;
    max-width: 100%;
    min-width: 100%;
  }

  .p-button.p-component.p-button-secondary.p-button-text-only:last-child {
    display: none;
  }
`;
