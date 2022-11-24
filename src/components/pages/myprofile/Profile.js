import React from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import {
  Container, Row, Col,
} from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './Profile.css';

const Profile = () => {
  const missions = useSelector((state) => state.missionReducer.missions);
  const joinedMission = missions.filter((data) => data.joinedMission);

  const rockets = useSelector((state) => state.rocketsReducer);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);

  return (
    <Container fluid>
      <Row className="rocketbox">
        <Col className="heading">
          <h2>My Missions</h2>
          {joinedMission.map((element) => (
            <Row key={uuidv4()} className="rocketColumnBox">
              {element.missionName}
            </Row>
          ))}
        </Col>

        <Col className="heading">
          <h2>My Rockets</h2>
          {reservedRockets.map((element) => (
            <Row key={uuidv4()} className="rocketColumnBox">
              {element.name}
            </Row>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
