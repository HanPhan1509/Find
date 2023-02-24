import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import BillView from './bill.view';
import {bills} from '../../data/bill';

const BillContainer = ({navigation}) => {
  const [bills_, setBills_] = useState(bills);
  return <BillView navigation={navigation} bills={bills_} />;
};

export default BillContainer;
