import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

const TextInputLoginLogout = ({
  text,
  placeholder,
  value,
  onChangeText,
  isPass = false,
  style,
}) => {
  const [secureTextEntry, setSecureTextEntry] = useState(isPass);
  const onPressShow = () => {
    setSecureTextEntry(!secureTextEntry);
  };
  return (
    <View style={style}>
      <View style={styles.viewTitle}>
        <Text style={styles.text}>{text}</Text>
        <TouchableOpacity onPress={onPressShow}>
          <Text style={styles.textShow}>{isPass && 'show'}</Text>
        </TouchableOpacity>
      </View>

      <TextInput
        placeholderTextColor={'grey'}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        style={styles.textInput}
      />
    </View>
  );
};

export default TextInputLoginLogout;

const styles = StyleSheet.create({
  textInput: {
    padding: 15,
    backgroundColor: '#F0F0F0',
    borderRadius: 7,
    color: 'black',
  },
  text: {
    color: 'black',
    fontSize: 15,
    marginBottom: 13,
  },
  textShow: {
    color: 'blue',
    fontWeight: 'bold',
  },
  viewTitle: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
