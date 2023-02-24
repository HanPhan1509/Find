import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const InfoTeam = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>TEAM 10</Text>

      <Text style={[styles.text, {textAlign: 'left'}]}>
        {'Lê Ngọc Tùng-18211TT0591'}
      </Text>
      <Text style={[styles.text, {textAlign: 'left'}]}>
        {'Đoàn Thị Mỹ Trang - 1821TT4871'}
      </Text>

      <Text style={[styles.text, {textAlign: 'left'}]}>
        {'Phạm Thị Thủy Tiên - 18211TT5078'}
      </Text>

      <Text style={[styles.text, {textAlign: 'left'}]}>
        {'Phan Thị Bích Hân - 18211TT4883'}
      </Text>
    </View>
  );
};

export default InfoTeam;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
    paddingTop: 20,
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 5,
  },
});
