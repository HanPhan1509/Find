import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ButtonSetting = ({text, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.view}>
      <Text style={styles.text}>{text}</Text>
      <MaterialIcons size={25} color={'#AAAAAA'} name="navigate-next" />
    </TouchableOpacity>
  );
};

export default ButtonSetting;

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },
  text: {
    color: 'black',
    fontSize: 20,
  },
});
