import react, { useState } from "react";
import { Text, TextInput, Button, View, StyleSheet, Alert } from "react-native";
import { auth } from "./config"
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = ({navigation}) => {

const [Email, setEmail] = useState('');
const [Password, setPassword] = useState('');

const signupUser = ()=> {
    navigation.navigate('register');
}

const loginUser = ()=>{
    signInWithEmailAndPassword(auth, Email, Password)
    .then((re) =>{
        navigation.navigate('home', {Email});
    })
    .catch((error)=>{
        console.log(error)
        Alert.alert('INVALID CREDENTIALS', 'Email or Password is Incorrect', [
            {text: 'confrim'}
          ])
    })
}

return(
    <View>
        <Text>Email: test@test.com</Text>
        <TextInput placeholder='Email' style={styles.input} onChangeText={(val) => setEmail(val)}/>
        <Text>Password: abc123</Text>
        <TextInput placeholder='Password' style={styles.input} secureTextEntry={true} onChangeText={(val) => setPassword(val)}/>
        <Button title='Login' onPress={loginUser}/>
        <Button title='Register' onPress={signupUser}/>
    </View>
    )
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

export default Login