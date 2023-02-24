import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './setting.style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ButtonSetting from '../../components/ButtonSetting';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SettingView = ({
  isLogin,
  onPressSignIn,
  onPressAccount,
  onPressChangePass,
  admin,
  onPressCategory,
  onPressProducts,
  onPressBills,
  onPressLogout,
  onPressUsers,
  onPressInfoTeam,
}) => {
  return (
    <View style={styles.view}>
      <View style={styles.viewSetting}>
        <AntDesign name="setting" size={40} color={'black'} />
        <Text style={styles.textSetting}>Setting</Text>
      </View>
      {isLogin ? (
        <>
          <ButtonSetting
            onPress={onPressAccount}
            text={'Account information'}
          />
          <ButtonSetting onPress={onPressInfoTeam} text={'Support'} />
          <ButtonSetting onPress={onPressChangePass} text={'Change password'} />
        </>
      ) : (
        <>
          <ButtonSetting text={'Support'} />
          <ButtonSetting onPress={onPressSignIn} text={'SignIn - SignUp'} />
        </>
      )}
      {admin && (
        <>
          <View style={styles.viewButtonAdmin}>
            <ButtonSetting
              onPress={onPressCategory}
              text={'Manager Categories'}
            />
            <ButtonSetting
              onPress={onPressProducts}
              text={'Manager Products'}
            />
            <ButtonSetting onPress={onPressBills} text={'Manager Bills'} />
            <ButtonSetting onPress={onPressUsers} text={'Manager Users'} />
          </View>
        </>
      )}

      <View style={styles.viewButton}>
        {isLogin && (
          <TouchableOpacity onPress={onPressLogout} style={styles.buttonLogout}>
            <MaterialCommunityIcons name="logout" size={30} />
            <Text style={styles.textLogout}>Log out</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default SettingView;
