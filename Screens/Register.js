import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TextInput, Alert } from 'react-native';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from './config';
import { useState } from 'react';

const Register = ({navigation}) =>{


  const[Email, setEmail] = useState('');
  const[Password, setPass] = useState('');



  const sendDataToFirebase = async()=>{
      createUserWithEmailAndPassword(auth, Email, Password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // ...
          console.log('SignUp Success');
          navigation.navigate('login');
        })
        .catch((error) => {
          console.log(error);
          Alert.alert('INVALID CREDENTIALS', 'Shit email or Shit Password', [
            {text: 'confrim'}
          ])
        });
    }
  

  return (
    <View style={styles.container}>
      <Text>Enter Email:</Text>
      <TextInput style={styles.input} onChangeText={(val) => setEmail(val)}/>
      <Text>Enter Password:</Text>
      <TextInput style={styles.input} onChangeText={(val) => setPass(val)}/>
      <Button title = 'Register' onPress={sendDataToFirebase}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 8,
    margin: 10,
    width: 200
  }
});

export default Register;
