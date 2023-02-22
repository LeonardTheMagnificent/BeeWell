import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, SafeAreaView, TouchableOpacity } from 'react-native';

export default function Login({ navigation }) {
  
  const pressHandler = () => {
    navigation.navigate('Middle');
}

  return (
    <View style={styles.container}>
        <Text style={styles.welcome}>Login To BeeWell </Text>
        <TextInput style={styles.input} placeholder="Username"></TextInput>
        <TextInput style={styles.input} placeholder="Password" secureTextEntry></TextInput>
        <StatusBar style="auto" />

        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.userButton} onPress={pressHandler}>
            <Text style={styles.buttonText}>Login</Text>  
            </TouchableOpacity>
            <TouchableOpacity style={styles.userButton} onPress={() => alert("Sign Up Works")}>
            <Text style={styles.buttonText}>Sign Up</Text>  
            </TouchableOpacity>
        </View>  

    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
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
    backgroundColor: "#FFD700",
    padding: 15,
    width: "45%",
  },
  buttonText: {
    fontSize: 10,
    textAlign: "center",
  }
});
