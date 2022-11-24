import React from 'react';
import PropTypes from 'prop-types';
import * as ReactBootStrap from 'react-bootstrap';
import MissionData from './MissionData';
import styles from './Missions.module.css';

const MissionRows = ({ missions, handleJoin }) => (
  <>
    <div>
      <ReactBootStrap.Table
        responsive="sm"
        striped
        bordered
        size="lg"
        className={styles.tableContainer}
      >
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th className={styles.status}>Status</th>
            <th className={styles.reserve}>Reserve</th>
          </tr>
        </thead>
        <tbody>
          {missions.map(
            ({
              id,
              missionName,
              dec,
              joinedMission,
            }) => (
              <MissionData
                key={id}
                id={id}
                missionName={missionName}
                description={dec}
                handleJoin={handleJoin}
                joined={joinedMission}
              />
            ),
          )}
        </tbody>
      </ReactBootStrap.Table>
    </div>
  </>
);

MissionRows.propTypes = {
  missions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      missionName: PropTypes.string,
      dec: PropTypes.string,
      joinedMission: PropTypes.bool,
    }),
  ).isRequired,
  handleJoin: PropTypes.func.isRequired,
};
export default MissionRows;
