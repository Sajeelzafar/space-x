import React from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import {
  Container, Row, Col,
} from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './Profile.css';

const Profile = () => {
  const rockets = useSelector((state) => state.rocketsReducer);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);
  return (
    <Container fluid>
      <Row className="rocketbox">
        <Col>
          <h2>My Missions</h2>
        </Col>
        <Col>
          <h2>My Rockets</h2>
        </Col>
      </Row>
      {reservedRockets.map((element) => (
        <Row className="rocketbox" key={uuidv4()}>
          <Col className="rocketColumnBox">
            {element.name}
          </Col>
          <Col className="rocketColumnBox">
            {element.name}
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default Profile;
