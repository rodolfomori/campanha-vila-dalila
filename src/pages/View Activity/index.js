import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import Spinner from '../../components/Spinner';
import api from '../../services/api';
import Back from '../../components/BackButton';

import { Container, Wrapper, CalendarIcon } from './styles';

export default function ViewActivity() {
  const [activities, setActivities] = useState();

  useEffect(() => {
    async function getData() {
      try {
        const response = await api.get(`activities`);
        setActivities(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(activities);

  return (
    <>
      <Back path="/" />
      <Wrapper>
        {activities &&
          activities.map(act => (
            <Link
              to={{
                pathname: '/full-activity',

                activity: act,
              }}
            >
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
            </Link>
          ))}
      </Wrapper>
    </>
  );
}
