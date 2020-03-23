import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const BackButton = styled(FontAwesomeIcon)`
  font-size: 30px;
  margin: 10px 5px 0 5px;
`;

export const BackContainer = styled.div`
  cursor: pointer;
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
