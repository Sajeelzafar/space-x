import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import {
  Container, Row, Col, Image, Button, Collapse,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { buttonToggle } from '../../../redux/rockets/rockets';
import './Rocket.css';

const Rockets = (props) => {
  const dispatch = useDispatch();
  const { rockets } = props;
  return (
    <Container fluid className="container">
      {rockets.map((element) => (
        <Row key={uuidv4()}>
          <Col className="eachbox" xs={5}><Image fluid src={element.flickr_images} alt="Flicker Image" /></Col>
          <Col className="eachbox">
            <h1>{element.name}</h1>
            <Collapse in={element.reserved}><Button variant="info" type="button" size="sm">Reserved</Button></Collapse>
            <p>{element.description}</p>
            {
              (element.reserved)
                ? <Button id={element.id} variant="light" className="cancelButton" type="button" onClick={(e) => dispatch(buttonToggle(e.target.id))}>Cancel Reservation</Button>
                : <Button id={element.id} variant="primary" type="button" onClick={(e) => dispatch(buttonToggle(e.target.id))}>Reserve Rocket</Button>
            }
          </Col>
        </Row>
      ))}
    </Container>
  );
};

Rockets.propTypes = {
  rockets: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    flickr_images: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    reserved: PropTypes.bool.isRequired,
  })).isRequired,
};

export default Rockets;
