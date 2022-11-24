import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Rockets from '../components/pages/Rockets/Rockets';

it('Test Mission component', () => {
  const Rocketeer = render(
    <Provider store={store}>
      <Router>
        <Rockets />
      </Router>
    </Provider>,
  );
  expect(Rocketeer).toMatchSnapshot();
});
