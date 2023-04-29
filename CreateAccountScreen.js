import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput} from 'react-native';
//import firebase from '../Firebase/firebase'
//import { initializeApp } from 'firebase/app';
//import { collection, doc, getDoc, setDoc, getFirestore, initializeFirestore } from 'firebase/firestore';

export default function CreateAccountScreen({ navigation }) {
  //const firestore = getFirestore();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');  
  const [email, setEmail] = useState('');

  let accountData = [firstName, lastName, username, password];

//   const onRegisterPress = () => {
//     // if (password !== confirmPassword) {
//     //     alert("Passwords don't match.")
//     //     return
//     // }
//     firestore
//         .auth()
//         .createUserWithEmailAndPassword(email, password)
//         .then((response) => {
//             const uid = response.user.uid
//             const data = {
//                 id: uid,
//                 email,
//                 firstName,
//             };
//             const usersRef = firebase.firestore().collection('users')
//             usersRef
//                 .doc(uid)
//                 .set(data)
//                 .then(() => {
//                     navigation.navigate('Login', {user: data})
//                 })
//                 .catch((error) => {
//                     alert(error)
//                 });
//         })
//         .catch((error) => {
//             alert(error)
//     });
// }

    return (
      <View style={styles.mainView}>
        <Text style={styles.title}>Create Account Screen</Text>
        {/*}
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
        */}
        <TextInput 
          style={styles.input} 
          placeholder="Email" 
          onChangeText={(username) => setUsername(username)}
        />

        <TextInput 
          style={styles.input}   
          placeholder="Password" 
          onChangeText={(password) => setPassword(password)}
        />{() => alert(accountData)}
        <View style={styles.buttonContainer}>

        <Button
          title="Go Login"
          onPress={() => navigation.navigate("Login")}
        />
        <Button
          title="Submit"
          //onPress={() => onRegisterPress()}
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