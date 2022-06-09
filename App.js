import React, { Component } from 'react';
import { View, LogBox } from 'react-native';
import AppNavigator from './src/routes/AppNavigator';

LogBox.ignoreAllLogs();
export default function App ({}){
  return (
    <View style={{flex:1}}>
      <AppNavigator />
    </View>
  );
}