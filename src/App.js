import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store';
import Main from './components/main';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Main />
  </Provider>
);
export default App;
