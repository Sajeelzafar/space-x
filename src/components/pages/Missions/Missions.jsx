import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions } from '../../../redux/missions/missions';
import MissionRows from './MissionRows';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missionReducer);

  useEffect(() => {
    dispatch(fetchMissions);
  }, [dispatch]);

  return (
    <div>
      <MissionRows missions={missions} />
    </div>
  );
};

export default Missions;
