// UserPage.js

import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';

const UserPage = ({ navigation }) => {
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    // Implement navigation based on the provided username
    console.log(username);
    switch (username) {
      case 'Prosumer':
        navigation.navigate('Prosumer');
        break;
      case 'Consumer':
        navigation.navigate('Consumer');
        break;
      default:
        navigation.navigate('Investor');
    }
  };

  return (
    <View style={styles.container}>
        <Text style={{marginBottom:20,fontSize:38,fontWeight:'bold'}}>USER LOGIN</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    paddingTop:150,
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    width: 300 ,
  },
});

export default UserPage;
