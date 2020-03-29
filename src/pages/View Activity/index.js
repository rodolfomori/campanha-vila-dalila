import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Back from '../../components/BackButton';
import SearchActivities from '../../components/SearchActivities';
import { Container, Wrapper, CalendarIcon } from './styles';

export default function ViewActivity() {
  const [activities, setActivities] = useState();

  function activitiesData(data) {
    console.log(data);
    data && setActivities(data);
  }

  return (
    <>
      <Back path="/" />
      <SearchActivities activitiesData={activitiesData} />
      <Wrapper act={activities && activities.length > 0 && true}>
        {activities && activities.length > 0 ? (
          activities.map(act => (
            // <Link
            //   style={{ textDecoration: 'none' }}
            //   to={{
            //     pathname: '/full-activity',
            //     activity: act,
            //   }}
            // >
            <Container key={act.id}>
              <p style={{ fontWeight: 'bold' }}>
                <CalendarIcon icon={faCalendarAlt} />
                {format(parseISO(act.date), "dd 'de' MMMM 'de' yyyy", {
                  locale: pt,
                })}
              </p>
              <p>
                <strong>Modalidade</strong>:{act.modality.nickname}
              </p>
              <p>
                <strong>Publicador</strong>:{act.publishers}
              </p>
              <p>
                <strong>Território n°</strong>: {act.building.territory}
              </p>
              <p>
                <strong>Condomínio</strong>:{act.building.name}
              </p>
              <p>
                <strong>Endereço</strong>:{act.building.address}
              </p>
              <p>
                <strong>Apto/Casa</strong>:{act.apartment}
              </p>
              {act.phone && (
                <p>
                  <strong>Telefone</strong>:{act.phone}
                </p>
              )}

              <p>
                <strong>Observações</strong>:{act.observations}
              </p>
            </Container>
            // </Link>
          ))
        ) : (
          <p>Nenhum Resultado Encontrado</p>
        )}
      </Wrapper>
    </>
  );
}
