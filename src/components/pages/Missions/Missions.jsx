import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions, joinMission } from '../../../redux/missions/missions';
import MissionRows from './MissionRows';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missionReducer.missions);

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  const handleJoinMission = (id) => {
    dispatch(joinMission(id));
  };

  return (
    <div>
      <MissionRows missions={missions} handleJoin={handleJoinMission} />
    </div>
  );
};

export default Missions;
