/* eslint linebreak-style: ["error", "windows"] */

import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import {
  Container, Row, Col, Image, Button,
} from 'react-bootstrap';
import { buttonToggle, fetchRockets } from '../../../redux/rockets/rockets';
import './Rocket.css';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rocketsReducer);
  const dataFetchedRef = useRef(false);
  useEffect(() => {
    if (dataFetchedRef.current);
    else {
      dataFetchedRef.current = true;
      dispatch(fetchRockets());
    }
  }, [rockets]);
  return (
    <Container fluid className="container">
      {rockets.map((element) => (
        <Row key={uuidv4()}>
          <Col className="eachbox" xs={5}><Image fluid src={element.flickr_images[0]} alt={element.flickr_images[0]} /></Col>
          <Col className="eachbox">
            <h1>{element.name}</h1>
            <p>{element.description}</p>
            <Button id={element.id} variant="primary" type="button" onClick={(e) => dispatch(buttonToggle(e.target.id))}>Reserve Rocket</Button>
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default Rockets;
