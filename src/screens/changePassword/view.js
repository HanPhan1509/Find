import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './style';
import Header from '../../components/Header';
import TextInputLoginLogout from '../../components/TextInputLoginLogout';
import Button from '../../components/Button';

const ChangePassView = ({
  onPressBack,

  onChangeTextPass,
  onChangeTextRePass,
  onChangeTextNewPass,
  newPassword,
  rePassword,
  password,
  onPressConfirm,
}) => {
  return (
    <View style={styles.view}>
      <Header onPressBack={onPressBack} title={'Change Password'} />
      <View style={styles.viewTextInput}>
        <TextInputLoginLogout
          value={password}
          onChangeText={onChangeTextPass}
          isPass={true}
          style={styles.cusTomTextInput}
          text={'Password: '}
          placeholder={'*****'}
        />
        <TextInputLoginLogout
          value={newPassword}
          onChangeText={onChangeTextNewPass}
          style={styles.cusTomTextInput}
          isPass={true}
          text={'New Password:'}
          placeholder={'*****'}
        />
        <TextInputLoginLogout
          value={rePassword}
          onChangeText={onChangeTextRePass}
          style={styles.cusTomTextInput}
          isPass={true}
          text={'Re-New Password:'}
          placeholder={'*****'}
        />
      </View>

      <Button onPress={onPressConfirm} text={'Confirm'} />
    </View>
  );
};

export default ChangePassView;
