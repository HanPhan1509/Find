import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from './style';
import {Logo} from '../../components';
import TextInputLoginLogout from '../../components/TextInputLoginLogout';
import Button from '../../components/Button';
import {TouchableOpacity} from 'react-native-gesture-handler';

const SignInView = ({
  onPressCreateNow,
  onPressReturn,
  onChangeTextEmail,
  onChangeTextPass,
  password,
  email,
  onPressSignIn,
}) => {
  return (
    <View style={styles.view}>
      <View style={styles.viewLogo}>
        <Logo />
        <Text style={styles.textSignIn}>Sign In</Text>
      </View>
      <View style={styles.viewTextInput}>
        <TextInputLoginLogout
          value={email}
          onChangeText={onChangeTextEmail}
          style={styles.cusTomTextInput}
          text={'Email Address:'}
          placeholder={'Enter your email address'}
        />
        <TextInputLoginLogout
          value={password}
          onChangeText={onChangeTextPass}
          style={styles.cusTomTextInput}
          isPass={true}
          text={'Password:'}
          placeholder={'*****'}
        />

        <Button onPress={onPressSignIn} text={'Sign In Now'} />

        <TouchableOpacity
          onPress={onPressCreateNow}
          style={styles.buttonCreateNow}>
          <Text style={styles.textCreateNow}>
            {'Do not have any account yet? '}
          </Text>
          <Text style={styles.textCreateNow}>{'Create Now'}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onPressReturn} style={styles.viewReturn}>
          <Text style={styles.textReturn}>{'Return'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignInView;
