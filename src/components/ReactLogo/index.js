import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import reactLogo from '../../assets/images/react_logo.json';

const ReactLogo = () => {
  return (
    <View style={styles.view}>
      <LottieView
        style={{width:35,height:35}}
        source={reactLogo}
        autoPlay
        loop
      />
    </View>
  );
};

export default ReactLogo;

const styles = StyleSheet.create({
  view: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
