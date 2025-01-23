import { Header, Board } from './components';
import React from 'react';
import './styles/main.scss';
import { Provider } from 'react-redux';
import store from './reduxStore';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Board />
    </Provider>
  );
}

export default App;
