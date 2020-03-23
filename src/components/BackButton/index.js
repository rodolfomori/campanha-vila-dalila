import React from 'react';
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';
import history from '../../services/history';

import { BackButton, BackContainer } from './styles';

export default function Back({ path }) {
  return (
    <BackContainer onClick={() => history.push(path)}>
      <BackButton icon={faAngleDoubleLeft} />
      <p>Voltar</p>
    </BackContainer>
  );
}
