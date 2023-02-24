import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './style';
import TextInputLoginLogout from '../../components/TextInputLoginLogout';
import Header from '../../components/Header';

const EditAccountView = ({
  onPressBack,

  email,
  name,
  onChangeTextEmail,
  onChangeTextName,
  onPressSave,
}) => {
  return (
    <View style={styles.view}>
      <Header onPressBack={onPressBack} title={'Account'} />
      <TouchableOpacity onPress={onPressSave} style={styles.viewButtonSave}>
        <View />
        <Text style={styles.buttonSave}>Save</Text>
      </TouchableOpacity>
      <View style={styles.viewContent}>
        <TextInputLoginLogout
          onChangeText={onChangeTextName}
          value={name}
          placeholder={'Enter text'}
          text={'Name . . .'}
        />
        <View style={styles.view__} />
        <TextInputLoginLogout
          onChangeText={onChangeTextEmail}
          value={email}
          placeholder={'Enter text'}
          text={'Email . . .'}
        />
      </View>
    </View>
  );
};

export default EditAccountView;
