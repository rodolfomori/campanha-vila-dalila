import React from 'react';

import Back from '../../../components/BackButton';
import { Container } from './styles';

export default function FullActivity(props) {
  const { activity } = props.location;

  return (
    <div>
      <Back path="/view" />
      {activity && (
        <Container key={activity.id}>
          <p>{activity.date}</p>
          <p>{activity.modality.nickname}</p>
          <p>{activity.publishers}</p>
          <p>{activity.observations}</p>
          <p>{activity.publishers}</p>
        </Container>
      )}
    </div>
  );
}
