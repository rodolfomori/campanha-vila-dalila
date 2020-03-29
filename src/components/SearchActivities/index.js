import React, { useState, useEffect } from 'react';

import api from '../../services/api';
import territories from '../../utils/territories';
import { WrapperButtons, Search, SelectStyle, WrapperSelect } from './styles';

export default function SearchActivities(props) {
  const { activitiesData } = props;
  const [activities, setActivities] = useState();
  const [showSearch, setShowSearch] = useState('territories');

  const [buildings, setBuildings] = useState();
  const [selectBuilding, setSelectBuilding] = useState();

  const [selectTerr, setSelectTerr] = useState(null);

  const [modalities, setModalities] = useState();
  const [selectMod, setSelectMod] = useState();

  // function typeButton(type) {
  //   setShowSearch(type);
  // }

  useEffect(() => {
    activities && activitiesData(activities);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activities]);

  // useEffect(() => {
  //   async function getData() {
  //     try {
  //       const response = await api.get(`activities`);
  //       setActivities(response.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
  //   getData();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

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
    async function getDataBuilding() {
      try {
        const building_id = selectBuilding ? selectBuilding.id : false;
        const modality_id = selectMod ? selectMod.number : false;

        if (building_id && modality_id) {
          const response = await api.post('search-activity', {
            building_id,
            modality_id,
          });
          setActivities(response.data);
        } else if (!building_id && modality_id) {
          const response = await api.post('search-activity', {
            modality_id,
          });
          setActivities(response.data);
        } else {
          const response = await api.post('search-activity', {
            building_id,
          });
          setActivities(response.data);
        }
      } catch (err) {
        console.log(err);
      }
    }
    (selectBuilding || selectMod) && getDataBuilding();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectMod, selectBuilding]);

  useEffect(() => {
    setBuildings(null);
    setActivities(null);
    setSelectBuilding(null);
    async function getDataBuilding() {
      try {
        const response = await api.get(`buildings/${selectTerr.number}`);
        setBuildings(response.data);
      } catch (err) {
        console.log(err);
        // toast.error('Esse território não possui condomínios cadastrados!');
      }
    }
    selectTerr && getDataBuilding();
  }, [selectTerr]);

  // useEffect(() => {
  //   async function getDataBuilding() {
  //     try {
  //       const building_id = selectBuilding.id;
  //       const response = await api.get(`search-activity`, { building_id });
  //       setActivities(response.data);
  //     } catch (err) {
  //       console.log(err);
  //       // toast.error('Esse território não possui condomínios cadastrados!');
  //     }
  //   }
  //   selectBuilding && getDataBuilding();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [selectBuilding]);

  return (
    <>
      {/* <WrapperButtons>
        <button type="button" onClick={() => typeButton('territories')}>
          Território ou Condomínio
        </button>
        <button type="button" onClick={() => typeButton('search')}>
          Busca Geral
        </button>
        <button type="button" onClick={() => typeButton('modality')}>
          Modalidade
        </button>
      </WrapperButtons> */}

      {showSearch === 'search' && (
        <Search>
          <input placeholder="Pesquise por uma atividade" />
          <button type="button">Pesquisar</button>
        </Search>
      )}

      {showSearch === 'territories' && (
        <WrapperSelect>
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
          <SelectStyle
            name="territories_id"
            placeholder="Território..."
            key={terr => terr.number}
            options={territories}
            onChange={setSelectTerr}
            getOptionValue={terr => terr.number}
            getOptionLabel={terr => terr.number}
          />
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
            <p style={{ textAlign: 'center' }}>
              Escolha o número do território antes de escolher o condomínio.
            </p>
          )}
        </WrapperSelect>
      )}
    </>
  );
}
