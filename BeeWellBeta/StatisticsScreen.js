import * as React from 'react';
import { View, Text, Button, StyleSheet, Image} from 'react-native';
import PureChart from 'react-native-pure-chart';
//import firebaseInfo from './Firebase/firebase'
import { doc, getDoc, getFirestore, initializeFirestore } from 'firebase/firestore';

// const firestore = getFirestore();
// const specialOfTheDay = doc(firestore, 'users/day1')


// async function readSingleDocument() {
//   const mySnapshot = await getDoc(specialOfTheDay)
//   if (mySnapshot.exists())
//   {
//       const docData = mySnapshot.data(emotionValue);
//       return(docData);
//       console.log(`My data is ${JSON.stringify()}`);
//   }
//   else{console.log(`couldnt find that shit`);}
  
// }
// const data1 = readSingleDocument();

let sampleData = [
  {
    value: 5,
    label: 'Marketing',
    color: 'red',
  }, {
    value: 15,
    label: 'Sales',
    color: 'yellow'
  }, {
    value: 2,
    label: 'Support',
    color: 'green'
  }
]

export default function StatisticsScreen({ navigation }) {
    return (
      <View style={styles.container}>
    <Text>Sleep: Low</Text>
    <PureChart data={sampleData} type='pie' size={650}></PureChart>
    </View> 
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'grey',
      alignItems: 'center',
      justifyContent: 'center',
    },
});

// import * as React from 'react';
// import { View, Text, Button, StyleSheet, Image} from 'react-native';

// export default function StatisticsScreen({ navigation }) {
//     return (
//       <View style={styles.mainView}>
//         <Text style={styles.title}>Statistics Screen</Text>
//         <Image source={require('../assets/pieChart.png')} style={{width: 400, height: 400}} />
//       </View>
//     );
//   }

//   const styles = StyleSheet.create({
//     mainView: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundColor: 'lightcoral',
//     },
//     title: {
//         fontSize: 50,
//        },
// });