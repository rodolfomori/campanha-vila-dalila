import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import Spinner from '../../components/Spinner';
import history from '../../services/history';
import api from '../../services/api';
import Back from '../../components/BackButton';

import {
  FormStyle,
  InputStyle,
  Container,
  SelectStyle,
  TextStyle,
  InputStyleMask,
  CalendarStyle,
} from './styles';

import pt from '../../components/Calendar';

export default function NewActivity() {
  const [loading, setLoading] = useState(false);

  const [modalities, setModalities] = useState();
  const [selectMod, setSelectMod] = useState();

  const territories = [
    { number: 1 },
    { number: 2 },
    { number: 3 },
    { number: 4 },
    { number: 6 },
    { number: 7 },
    { number: 8 },
    { number: 9 },
    { number: 10 },
    { number: 11 },
    { number: 12 },
    { number: 13 },
    { number: 14 },
    { number: 15 },
    { number: 16 },
    { number: 17 },
    { number: 18 },
    { number: 19 },
    { number: 20 },
    { number: 21 },
    { number: 22 },
    { number: 23 },
    { number: 25 },
    { number: 25 },
    { number: 26 },
    { number: 27 },
    { number: 28 },
    { number: 29 },
    { number: 30 },
    { number: 31 },
    { number: 32 },
    { number: 33 },
    { number: 34 },
    { number: 35 },
    { number: 36 },
    { number: 37 },
    { number: 38 },
  ];
  const [selectTerr, setSelectTerr] = useState('');

  const [buildings, setBuildings] = useState();
  const [selectBuilding, setSelectBuilding] = useState();

  const [phone, setPhone] = useState('');

  const [date, setDate] = useState('');

  useEffect(() => {
    async function getData() {
      try {
        const response = await api.get(`modalities`);
        setModalities(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, []);

  useEffect(() => {
    setBuildings(null);
    async function getDataBuilding() {
      try {
        const response = await api.get(`buildings/${selectTerr.number}`);
        setBuildings(response.data);
      } catch (err) {
        console.log(err);
        // toast.error('Esse território não possui condomínios cadastrados!');
      }
    }
    getDataBuilding();
  }, [selectTerr]);

  const schema = Yup.object().shape({
    publishers: Yup.string().required(),
    modality_id: Yup.number().required(),
    building_id: Yup.number().required(),
    observations: Yup.string().required(),
    phone: Yup.string(),
  });

  async function handleSubmit({ publishers, apartment, observations }) {
    console.log(phone);
    setLoading(true);
    if (!selectMod || !selectBuilding) {
      setLoading(false);
      return toast.error('Existe Campos Obrigatórios não preenchidos');
    }

    const modality_id = selectMod.id;
    const building_id = selectBuilding.id;
    if (!date || date === '') setDate(new Date());

    if (
      !(await schema.isValid({
        publishers,
        apartment,
        observations,
        modality_id,
        building_id,
      }))
    ) {
      setLoading(false);
      return toast.error('Existe Campos Obrigatórios não preenchidos');
    }

    try {
      await api.post('activities', {
        publishers,
        building_id,
        observations,
        date,
        modality_id,
        apartment,
        phone,
      });
      toast.success('Atividade Registrada com sucesso!');
    } catch (err) {
      toast.error('Erro no Servido, Tente Novamente!');
      setLoading(false);
    } finally {
      setTimeout(() => {
        history.push('/');
        setLoading(false);
      }, 2900);
    }
  }

  return (
    <>
      <Spinner loading={loading} />
      <Back path="/" />
      <FormStyle onSubmit={handleSubmit}>
        <Container>
          <h1 style={{ textAlign: 'center', fontSize: '25px' }}>
            Novo Registro de Atividade
          </h1>
          <br />
          <p>
            Preencha todos os dados da atividade que foi realizada.
            <br />
            Esse formulário deve ser preenchido individualmente para cada
            morador, apto. ou casa.
          </p>
          <p>
            <strong>Dúvidas e Problemas Técnicos:</strong> (11) 9 6829-0266
            <br />
          </p>
          <p style={{ fontWeight: 'bold' }}>
            <strong style={{ color: 'red' }}>*</strong> Itens Obrigatórios
            <br />
          </p>
        </Container>{' '}
        <Container>
          <h1>
            Data<strong style={{ color: 'red' }}>*</strong>
          </h1>
          <p> Insira a data que seu grupo está trabalhando na modalidade.</p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '90% 10%',
              width: '95%',
            }}
          >
            <CalendarStyle
              inline={false}
              dateFormat="DD dd 'de' MM 'de' yy"
              showButtonBar
              showIcon
              readOnlyInput
              style={{
                padding: 0,
                margin: 0,
              }}
              locale={pt}
              value={date}
              onChange={e => setDate(e.value)}
            />
          </div>
        </Container>
        <Container>
          <h1>
            Nome dos Publicadores <strong style={{ color: 'red' }}>*</strong>
          </h1>
          <InputStyle
            name="publishers"
            type="text"
            placeholder="Nome do Publicador"
          />
          {/* <button type="button" onClick={addPublisher}>
          + Adicionar Publicador
        </button> */}
        </Container>
        <Container>
          <h1>
            Modalidade<strong style={{ color: 'red' }}>*</strong>
          </h1>
          {modalities && (
            <SelectStyle
              placeholder="Modalidade..."
              key={mod => mod.id}
              name="modality_id"
              options={modalities}
              onChange={setSelectMod}
              getOptionValue={mod => mod.name}
              getOptionLabel={mod => mod.name}
            />
          )}
        </Container>
        <Container>
          <h1>
            Território<strong style={{ color: 'red' }}>*</strong>
          </h1>
          {territories && (
            <SelectStyle
              name="territories_id"
              placeholder="Território..."
              key={terr => terr.number}
              options={territories}
              onChange={setSelectTerr}
              getOptionValue={terr => terr.number}
              getOptionLabel={terr => terr.number}
            />
          )}
        </Container>
        <Container>
          <h1>
            Nome do Condomínio/Prédio
            <strong style={{ color: 'red' }}>*</strong>
          </h1>
          {buildings ? (
            <SelectStyle
              name="modality_id"
              placeholder="Condomínio..."
              options={buildings}
              onChange={setSelectBuilding}
              getOptionValue={building =>
                `${building.address} / ${building.name}`
              }
              getOptionLabel={building =>
                `${building.address} / ${building.name}`
              }
              noOptionsMessage={() =>
                'Nenhum condomínio cadastrado nesse território'
              }
            />
          ) : (
            <p>
              Escolha o número do território antes de escolher o condomínio.
            </p>
          )}
        </Container>
        <Container>
          <h1>
            Apartamento / Casa em que falou
            <strong style={{ color: 'red' }}>*</strong>
          </h1>
          <p>
            Insira o número do apto ou casa do condomínio.
            <br /> <strong>Por exemplo:</strong> Casa 13 | Apto 141 Bloco B |
            Apto 12 | Casa 02.
          </p>
          <InputStyle
            name="apartment"
            type="text"
            placeholder="Número do Apto. / Casa"
          />
        </Container>
        <Container>
          <h1>Contato</h1>
          <p>
            Coloque aqui o número de contato do morador.
            <br /> <strong>Por exemplo:</strong> (11) 2566-1234 | (11)
            96828-0345.
          </p>
          <InputStyleMask
            kind="cel-phone"
            value={phone}
            placeholder="Telefone ou Celular com DDD"
            onChangeText={text => setPhone(text)}
          />
        </Container>
        <Container>
          <h1>
            Ocorrências - Observações Relevantes
            <strong style={{ color: 'red' }}>*</strong>
          </h1>
          <p>
            Insira observações sobre o trabalho realizado nesse apto ou casa.
            <br />
            <strong>Por exemplo:</strong> Falei pelo interfone com José Roberto.
            Fizemos a apresentação sugestão sobre os últimos dias e lemos
            2-Timóteo 3:1-5. Não aceitou revisita porém gostou do contato.
            Informou que poderíamos enviar publicações via WhatsApp pelo tel
            (11) 98756-9012. Informou também o número do seu telefone fixo (11)
            2651-8744.
          </p>

          <TextStyle
            className="textArea"
            name="observations"
            type="text"
            multiline
            placeholder="Observações"
            style={{
              padding: '5px 7px',
            }}
          />
        </Container>
        <button type="submit">Enviar Dados</button>
      </FormStyle>
    </>
  );
}
