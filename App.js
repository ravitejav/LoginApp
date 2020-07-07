/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const login = () => {
  Alert.alert('You will be logged in!!');
};

const App: () => React$Node = () => {
  return (
    <>
      <SafeAreaView style={styles.main}>
        <View style={styles.imageView}>
          <Image
            style={styles.image}
            source={require('./Images/loginLogo.png')}
          />
          <Text style={{alignSelf: 'center'}}>Please login</Text>
        </View>
        <View style={styles.inputFields}>
          <TextInput
            placeholder=" Username or EmailId"
            style={styles.inputField}
          />
          <TextInput
            placeholder=" Password"
            secureTextEntry
            style={styles.inputField}
          />
          <TouchableOpacity style={styles.loginButton} onPress={() => login()}>
            <Text style={{paddingTop: '5%'}}>Login</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#64dbed',
    flexDirection: 'column',
  },
  imageView: {
    flex: 0.4,
  },
  image: {
    flex: 1,
    resizeMode: 'center',
    marginTop: '10%',
    alignSelf: 'center',
    backgroundColor: '#64dbed',
    alignContent: 'center',
  },
  inputFields: {
    flex: 0.5,
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'flex-end',
  },
  inputField: {
    backgroundColor: '#a2e9f2',
    borderRadius: 6,
    height: 40,
    width: '80%',
    margin: '2%',
    alignSelf: 'center',
  },
  loginButton: {
    height: 35,
    width: '30%',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#5ab0ed',
    borderRadius: 15,
    shadowColor: '#666666',
    shadowOffset: {height: 1, width: 1},
    shadowOpacity: 1,
    elevation: 2,
  },
});

export default App;
