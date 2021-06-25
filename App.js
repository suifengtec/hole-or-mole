import React from 'react';
//import { StyleSheet, Text, View } from 'react-native';

import { Provider } from 'react-redux'
import store from './redux/store'

import GameBoard from './components/GameBoard'

export default function App() {
  return (
    <Provider store={store}>
      <GameBoard></GameBoard>
    </Provider>
  );
}

