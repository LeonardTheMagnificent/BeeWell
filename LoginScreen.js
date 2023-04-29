import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, SafeAreaView, TouchableOpacity, Button, Alert} from 'react-native';

export default function LoginScreen({ navigation }) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  let AccountIndex;
  let foundAccount = false;

  const handleSignUp = () => {
    auth 
      .createUserWithEmailAndPassword(username, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log(user.username);
      })
      .catch(error => alert(error.message))
  }

  const accounts = [        
    {username: "nathan", password: "pass1", name: "Nathan Chupp"},
    {username: "ellie", password: "pass2", name: "Ellie Daily"},
    {username: "ryan", password: "pass3", name: "Ryan Chin"},
    {username: "lenny", password: "pass4", name: "Leonard Farrell"}
  ]
  
  const pressHandler = () => {
    if (!username.trim() == "" && !password.trim() == "") {
      accounts.forEach((element, index) => {
        if (element.username == username && element.password == password){
          AccountIndex = index;
          foundAccount = true; 
        }
      });
      if (foundAccount) {
        Alert.alert(
          'Login Successful',
          'Welcome, ' +accounts[AccountIndex].name,
        );
        navigation.navigate('Tabs');
      }
      else {
        alert("Invalid Credentials.")
      }
    }
    else{
      alert("Text Fields Empty")
    }
  }   

  return (
    <View style={styles.container}>
        <Text style={styles.welcome}>Login To BeeWell </Text>

        <TextInput 
          style={styles.input} 
          placeholder="Username" 
          onChangeText={(username) => setUsername(username)}
        />

        <TextInput 
          style={styles.input}   
          placeholder="Password" 
          secureTextEntry
          onChangeText={(password) => setPassword(password)}
        />

        <StatusBar style="auto" />

        <View style={styles.buttonContainer}>

            <Button title="Login" color="#FFD700" style={styles.userButton} onPress={() => pressHandler()}/>
            <Button title="Create Account" style={styles.userButton} color="#FFD700" onPress={() => navigation.navigate('CreateAccount')}/>
            {/*<Button title="Create Account" style={styles.userButton} color="#FFD700" onPress={() => handleSignUp}/>*/}
            {/*
            <TouchableOpacity style={styles.userButton} onPress={() => pressHandler()}>
            <Text style={styles.buttonText}>Login</Text>  
            </TouchableOpacity>             
            <TouchableOpacity style={styles.userButton} onPress={() => alert("Sign Up Works")}>
            <Text style={styles.buttonText}>Create Account</Text>  
            </TouchableOpacity>
            */}

        </View> 
    </View>    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'steelblue',
    justifyContent: "center",
    alignItems: "center",
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    color: '#fff',
    padding: 15,
  },
  input: {
    width: "90%",
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
  },
  userButton: {
    //color: "#FFD700",
    //padding: 15,
    //width: "65%",
  },
  buttonText: {
    fontSize: 10,
    textAlign: "center",
  }
});
