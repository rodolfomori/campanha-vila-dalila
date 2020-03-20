import React from 'react';

import { Container, LinkPages } from './styles';

import logoCampanha from '../../assets/campanha-logo.png';

export default function Campaign() {
  return (
    <>
      {/* <img src={logoCampanha} alt="" /> */}
      <Container>
        <img src={logoCampanha} alt="logo campanha" />
        {/* <h1>Campanha Prédios e Condomínios</h1> */}
        <p>
          Esse formulário foi criado exclusivamente para registro de ocorrências
          do trabalho realizado nas modalidades da campanha de prédios e
          condomínios.
        </p>
        <p>
          <strong>*</strong> Lembre-se sempre das orientações dadas no
          treinamento de cada modalidade.
          <br />
          <br />
          Queremos alcançar pessoas de todo tipo e em todos os lugares{' '}
          <strong>(Mateus 24:14).</strong>
        </p>
      </Container>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '40px',
        }}
      >
        <LinkPages style={{ backgroundColor: '#3CB371	' }} to="/new">
          Novo Registro de Atividade
        </LinkPages>
        {/* <LinkPages style={{ backgroundColor: '#3b9eff' }} to="/view">
          Ver Atividades Já realizadas
        </LinkPages> */}
      </div>
    </>
  );
}
