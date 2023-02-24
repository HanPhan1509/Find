import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from './style';
import Header from '../../components/Header';

const ManagerBillView = () => {
  return (
    <View style={styles.view}>
      <Header title={'Bills'} />
    </View>
  );
};

export default ManagerBillView;
