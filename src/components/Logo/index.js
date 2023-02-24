import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const Logo = ({style}) => {
  return (
    <View style={[styles.view, style]}>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require('../../assets/images/grapefruit.png')}
      />
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require('../../assets/images/fruitall.png')}
      />
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
  },
  image: {
    width: 50,
    height: 50,
  },
});
