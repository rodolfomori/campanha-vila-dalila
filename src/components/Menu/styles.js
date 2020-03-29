import { Paper } from '@material-ui/core';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  background: #2f343a;
  /* && {
    background: #3d4977;
    padding: 0 30px;
    height: 78px;
    border: 0 solid #3d4977;
    border-radius: 0;
  } */

  ul {
    div {
      height: 50px;
      width: 100%;
      display: flex;
      align-items: center;
      &:hover {
        background-color: #3d4977;
      }
    }
    li {
      margin: 0;
      margin-left: 10px;
      padding: 0;
      color: white;
    }
  }
`;

export const IconBack = styled(MenuOpenIcon)`
  cursor: pointer;
  font-size: 35px;
  color: white;
  position: relative;
  left: 178px;
  && {
    font-size: 35px;
  }
`;

export const LinkStyle = styled(Link)`
  color: inherit;
  padding-left: 10px;
  &:focus,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: white;
  }
  /* margin: 0;
  padding: 0; */
`;

export const TopMenu = styled(Paper)`
  display: flex;
  align-items: center;
  p {
    font-weight: bold;
    font-size: 20px;
    display: flex;
    margin: 0;
    margin-left: 15px;
    margin-top: 6px;
  }
  && {
    background: #3d4977;
    height: 78px;
    border: 0 solid #3d4977;
    border-radius: 0;
    display: flex;
    align-items: center;
  }

  div {
    margin-left: 7px;
    border-radius: 50px;
    background: #eee;
    width: 60px;
    display: flex;
    height: 60px;
    justify-content: center;
    align-items: center;
  }
`;
