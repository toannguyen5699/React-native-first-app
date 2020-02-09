import React from 'react';
import { StyleSheet } from 'react-native';
import  AppNavigator  from './AppNavigator';

export default class App extends React.Component {


  render() {
    return (
      <AppNavigator />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 16,
  },
});
