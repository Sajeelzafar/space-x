import React from 'react';
import PropTypes from 'prop-types';
import * as ReactBootStrap from 'react-bootstrap';
import MissionData from './MissionData';
import styles from './Missions.module.css';

const MissionRows = ({ missions }) => {
  console.log(missions);

  return (
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
              }) => (
                <MissionData
                  key={id}
                  id={id}
                  missionName={missionName}
                  description={dec}
                />
              ),
            )}
          </tbody>
        </ReactBootStrap.Table>
      </div>
    </>
  );
};

MissionRows.propTypes = {
  missions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      missionName: PropTypes.string,
      dec: PropTypes.string,
    }),
  ).isRequired,
};
export default MissionRows;
