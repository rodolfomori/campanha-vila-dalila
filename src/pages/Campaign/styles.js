import styled from 'styled-components';
import { darken } from 'polished';
import { Form, Input, Check } from '@rocketseat/unform';
import Select from 'react-select';
import { Paper } from '@material-ui/core';
import { Link } from 'react-router-dom';

export const Container = styled(Paper)`
  margin: auto;

  margin-top: 30px;
  display: flex;
  flex-direction: column;

  width: 60%;
  max-width: 450px;
  min-width: 270px;

  @media (min-width: 600px) {
    align-content: center;
    align-items: center;
  }

  @media (max-width: 600px) {
    width: 95%;
  }

  h1 {
    color: rgba(0, 0, 0);
    font-weight: bold;
    margin: 15px 5px 30px 5px;
    font-size: 30px;
    text-align: center;
  }

  p {
    font-size: 13px;
    font-weight: 400;
    letter-spacing: 0.3px;
    line-height: 16px;
    color: #202124;
    line-height: 135%;
    margin: 5px 10px;
    width: 95%;
    margin-bottom: 20px;ogo
  }

  img{
    width: 60%;
    max-width: 450px;
    min-width: 270px;
  @media (max-width: 600px) {
    width: 95%;
  }
  }
`;

export const LinkPages = styled(Link)`
  padding: 30px 0;
  margin: 20px 0;
  font-size: 25px;
  border: solid 0;
  border-radius: 5px;
  text-align: center;
  color: white;
  font-weight: bold;
  width: 60%;
  max-width: 450px;
  min-width: 270px;
  @media (max-width: 600px) {
    width: 95%;
  }

  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  &:hover {
    font-size: 27px;
    transition: all 0.5s ease;
    color: white;
  }
`;
