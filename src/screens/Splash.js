import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationServices} from '~utils';
import React, {Component} from 'react';
import {View} from 'react-native';

class Splash extends Component {
  async componentDidMount() {
    const accessToken = await AsyncStorage.getItem('ACCESS_TOKEN');
    if (accessToken) {
      NavigationServices.replace('Home');
    } else {
      NavigationServices.replace('Login');
    }
  }

  render() {
    return <View></View>;
  }
}

export default Splash;
