import React from 'react';
import { Provider } from 'react-redux';

import Layout from './components/Layout';
import Explorer from './components/Explorer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './components/Layout/Layout.css';

const App = ({ store }) => (
  <Provider store={store}>
    <Layout>
      <Explorer />
    </Layout>
  </Provider>
);

export default App;
