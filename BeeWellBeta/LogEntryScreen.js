import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image, TextInput} from 'react-native';

export default function LogEntryScreen({ navigation }) {

  const [emotion, setEmotion] = useState('');
  let log = [emotion];

    return (
      <View style={styles.mainView}>
        <Text style={styles.title}>Log Entry Screen</Text>
        
        <Image source={require('../assets/feelingsWheel.png')} style={{width: 400, height: 400, padding: 20}}/>
      
        <TextInput 
          style={styles.input} 
          placeholder="Emotion" 
          onChangeText={(emotion) => setEmotion(emotion)}
        />
        <View style={styles.buttonContainer}>
        <Button
          title="Submit Log"
          onPress={() => alert(log)}
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
      width: "65%",
      backgroundColor: '#fff',
      padding: 15,
      marginBottom: 10,
      marginTop: 10,
    },
   title: {
    fontSize: 50,
   },
});