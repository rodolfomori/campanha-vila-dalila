import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import api from '../../services/api';
import territories from '../../utils/territories';
import {
  WrapperButtons,
  Search,
  SelectStyle,
  WrapperSelect,
  SearchIcon,
  InputStyleMask,
} from './styles';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Spinner from '../../components/Spinner';

export default function SearchActivities(props) {
  const { activitiesData } = props;

  const [loading, setLoading] = useState(false);

  const [activities, setActivities] = useState();
  const [showSearch, setShowSearch] = useState('territories');

  const [buildings, setBuildings] = useState();
  const [selectBuilding, setSelectBuilding] = useState();

  const [selectTerr, setSelectTerr] = useState(null);

  const [modalities, setModalities] = useState();
  const [selectMod, setSelectMod] = useState();

  const [phone, setPhone] = useState(null);

  useEffect(() => {
    activities && activitiesData(activities);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activities]);

  const handleSearchPhone = async () => {
    setLoading(true);
    try {
      const response = await api.post(`search-phone`, { phone });
      if (response.data.length > 0) {
        setBuildings(null);
        setSelectBuilding(null);
        setSelectTerr(null);
        setSelectMod(null);
        setPhone(null);
        setTimeout(() => {
          setActivities(response.data);
        }, 500);
      } else {
        toast.error('Nenhum registro encontrado com esse número de telefone!');
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

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

  return (
    <>
      <Spinner loading={loading} />
      <Search>
        <InputStyleMask
          kind="cel-phone"
          value={phone}
          placeholder="Telefone ou Celular com DDD"
          onChangeText={text => setPhone(text)}
        />{' '}
        <button onClick={handleSearchPhone} type="button">
          <SearchIcon icon={faSearch} />
        </button>
      </Search>

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
