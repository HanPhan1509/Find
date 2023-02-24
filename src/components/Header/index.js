import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ReactLogo from '../ReactLogo';

const Header = ({title, onPressBack}) => {
  return (
    <View style={styles.view}>
      <TouchableOpacity onPress={onPressBack}>
        <Ionicons name="arrow-back" size={24} color={'black'} />
      </TouchableOpacity>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={styles.text}>{title}</Text>
        <ReactLogo />
      </View>
      <View />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  view: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
  },
});
