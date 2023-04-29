import { StyleSheet, Text, View, Button } from 'react-native';
import React, { Component, useState, useEffect } from 'react';
import PureChart from 'react-native-pure-chart';
import { Firestore, doc, getDoc, getFirestore, initializeFirestore, setDoc } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import firestore from '@react-native-firebase/firestore';


//initializeApp;
//const firestore2 = getFirestore();
//const specialOfTheDay = doc(firestore2, 'account code (generated)/20230101')

let time = 1;
let emotValue;
setEmotValue(time);
function setEmotValue(time)
{
if (time==0){emotValue = [0,0,0,0,0];}
if (time==1){emotValue = [1,1,1,1,1];}
if (time==2){emotValue = [1,3,1,3,1];}
if (time==3){emotValue = [3,7,3,3,5];}
if (time==4){emotValue = [7,14,3,3,14];}
return emotValue
}


export default function StatisticsScreen() {//-----------------------------------------MAIN VIEW------------------------- 

//let mad = useFirestoreData();

let sampleData2W = [
  {value: emotValue[0], label: 'Bad', color: 'green',}, 
  {value: emotValue[1], label: 'Fearful', color: 'orange'}, 
  {value: emotValue[2], label: 'Angry', color: 'red'},  
  {value: emotValue[3], label: 'Disgusted', color: 'grey',}, 
  {value: emotValue[4], label: 'Sad', color: 'blue'}, 
]



    const [time, setCount] = useState(1);
    useEffect(() => {
      console.log(`The time has changed to ${time}`);
      setEmotValue(time);
    }, [time]);

  
  return (
<View style={styles.container}>
<PureChart data={sampleData2W} type='pie' size={300} ></PureChart>
<View style={styles.buttons}>
      <Button title="One Week" onPress={()=>setCount(time+1)}/>
      <Button title="Two Week" onPress={()=>setCount(time+1)}/>
      <Button title="One Month" color={'darkblue'} onPress={()=>setCount(time+1)}/>
      <Button title="All Time" color={'purple'} onPress={()=>setCount(time+1)}/>
</View>

{/* {mad ? (<Text>{mad}</Text>) : (<Text>Loading...</Text>)} entry</Text> */}

<Text style={styles.textLegend}>LEGEND</Text>
<Text style={styles.textLegendVals}>Bad = {emotValue[0]} entry</Text>                                 
<Text style={styles.textLegendVals}>Fearful = {emotValue[1]} entry</Text>
<Text style={styles.textLegendVals}>Angry = {emotValue[2]} entry</Text>
<Text style={styles.textLegendVals}>Disgusted = {emotValue[3]} entry</Text>
<Text style={styles.textLegendVals}>Sad = {emotValue[4]} entry</Text>




</View> 
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 50,
    
  },
  textTitle: {
    fontSize: 40,
    //fontFamily: 'Georgia',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    margin: 0,
  },
  textLegend: {
    fontSize: 10,
    textAlign: 'center',
    margin: 0,
    backgroundColor: 'grey',
    top: -60,
    left: 70,
    width: 100,
    height: 20,
  },
  textLegendVals: {
    fontSize: 10,
    textAlign: 'center',
    margin: 0,
    backgroundColor: 'grey',
    top: -60,
    left: 70,
    width: 100,
    height: 20,
  },
  buttons: {
    top: 70,
    left: -70,
  },
});
//----------------------------------------------------------------------------------------
function useFirestoreData() {  //RETURNS VALUE FROM THE FUNCTION PULLFIRESTORE
  const [data, setData] = useState(null);

  useEffect(() => {
    let va = 'quest1';
    pullFirestore(va)
      .then(data => setData(data))
      .catch(error => console.log(error));
  }, []);
  return data;
}
//----------------------------------------------------------------------------------------
async function writeFirestore() {  //WRITES VALUE TO FIRESTORE
  const docData = {
  emotion: 'expessoDepresso',
  quest1: 1,
  quest2: 2,
  note: 'I hate it here'
  };
  setDoc(specialOfTheDay,docData,{ merge: true });
  }
//----------------------------------------------------------------------------------------
async function pullFirestore(value){ //RETURNS DATA FROM FIRESTORE
  
  
  console.log('I PASSED IN:',value)
  const mySnapshot = await getDoc(specialOfTheDay)
  if (mySnapshot.exists())
  {
      let answer = await mySnapshot.data().quest1;
      console.log(`Value in pullFirestore: `,answer);
      return(answer);
  }
  else{console.log(`couldnt find the value specified, or the value's path`);}
}
