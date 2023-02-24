import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import styles from './style';
import Logo from '../../components/Logo';
import TextInputLoginLogout from '../../components/TextInputLoginLogout';
import Button from '../../components/Button';

const SignUpView = ({
  onPressGoBack,

  changeTextRePassword,
  changeTextPassword,
  changeTextEmail,
  changeTextName,
  onPressSignUp,
  rePassword,
  password,
  email,
  name,
}) => {
  return (
    <View style={styles.view}>
      <View style={styles.viewLogo}>
        <Logo />
        <Text style={styles.textSignIn}>Create An Account</Text>
      </View>
      <ScrollView style={styles.viewTextInput}>
        <TextInputLoginLogout
          onChangeText={changeTextName}
          value={name}
          style={styles.cusTomTextInput}
          text={'Name:'}
          placeholder={'Enter your name'}
        />
        <TextInputLoginLogout
          onChangeText={changeTextEmail}
          value={email}
          style={styles.cusTomTextInput}
          text={'Email Address:'}
          placeholder={'Enter your email address'}
        />
        <TextInputLoginLogout
          onChangeText={changeTextPassword}
          value={password}
          style={styles.cusTomTextInput}
          isPass={true}
          text={'Password:'}
          placeholder={'*****'}
        />
        <TextInputLoginLogout
          onChangeText={changeTextRePassword}
          value={rePassword}
          style={styles.cusTomTextInput}
          isPass={true}
          text={'Confirm Password:'}
          placeholder={'*****'}
        />

        <Button onPress={onPressSignUp} text={'Sign Up Now'} />

        <TouchableOpacity
          onPress={onPressGoBack}
          style={styles.buttonCreateNow}>
          <Text style={styles.textCreateNow}>
            {'Already have any account yet?'}
          </Text>
          <Text style={styles.textCreateNow}>{'Sign In Now'}</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default SignUpView;
