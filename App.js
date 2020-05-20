import React, { useState } from 'react';
import * as Font from 'expo-font'
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/home'
import Navigator from './routes/homeStack'
import LoginForm from './routes/LoginForm'

const getFonts = () =>Font.loadAsync({
    'nunito-regular': require('./assets/fonts/Nunito Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito Bold.ttf')
});

export default function App()
{
  return (
    <Navigator/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
