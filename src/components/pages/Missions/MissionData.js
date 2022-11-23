import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import styles from './Missions.module.css';

const MissionData = ({
  id,
  missionName,
  description,
}) => (
  <tr key={id}>
    <td>{missionName}</td>
    <td>{description}</td>
    <td className={styles.statusData}>
      <Button variant="secondary" size="sm" type="button" disabled>
        NOT A MEMBER
      </Button>
    </td>
    <td className={styles.reserveData}>
      <Button variant="outline-secondary" type="button" size="sm">
        Join Mission
      </Button>
    </td>
  </tr>
);

MissionData.propTypes = {
  id: PropTypes.string.isRequired,
  missionName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default MissionData;
