import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput} from 'react-native';

export default function CreateAccountScreen({ navigation }) {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  let accountData = [firstName, lastName, username, password];

    return (
      <View style={styles.mainView}>
        <Text style={styles.title}>Create Account Screen</Text>

        <TextInput 
          style={styles.input} 
          placeholder="First Name" 
          onChangeText={(firstName) => setFirstName(firstName)}
        />

        <TextInput 
          style={styles.input}   
          placeholder="Last Name" 
          onChangeText={(lastName) => setLastName(lastName)}
        />

        <TextInput 
          style={styles.input} 
          placeholder="Username" 
          onChangeText={(username) => setUsername(username)}
        />

        <TextInput 
          style={styles.input}   
          placeholder="Password" 
          onChangeText={(password) => setPassword(password)}
        />
        <View style={styles.buttonContainer}>

        <Button
          title="Go Login"
          onPress={() => navigation.navigate("Login")}
        />
        <Button
          title="Submit"
          onPress={() => alert(accountData)}
        />
        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'darkseagreen',
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
    buttons: {
        color: "#FFD700",
        padding: 15,
        width: "%65",
    },
    title: {
      fontSize: 50,
     },
});