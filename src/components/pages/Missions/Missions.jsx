import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { joinMission } from '../../../redux/missions/missions';
import MissionRows from './MissionRows';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missionReducer.missions);

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
