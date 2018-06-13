import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

beforeAll(() => {
  // noinspection JSValidateTypes
  fetch = () => ({
    json: () => ({
      resource_one: 'url',
      resource_two: 'url',
    })
  });
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
