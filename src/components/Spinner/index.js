import React from 'react';
import HashLoader from 'react-spinners/HashLoader';

import { Container } from './styles';

export default function Spinner({ loading }) {
  return (
    <Container style={{ display: !loading && 'none' }}>
      <HashLoader
        size={100}
        css={{ position: 'fixed', top: '50%', left: '40%', zIndex: 9999 }}
        color="#3d4977"
        loading={loading}
      />
      <div
        style={{
          backgroundColor: 'black',
          opacity: 0.3,
          width: '100%',
          height: '100%',
          position: 'fixed',
          zIndex: 999,
        }}
      />
    </Container>
  );
}
