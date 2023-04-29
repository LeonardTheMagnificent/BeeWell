import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import LoginScreen from "./screens/LoginScreen";
import CreateAccountScreen from "./screens/CreateAccountScreen.js";
import LogEntryScreen from "./screens/LogEntryScreen";
import StatisticsScreen from "./screens/StatisticsScreen.js";
import CalendarScreen from "./screens/CalendarScreen";

/////////////////////////////////////////////////////////////////////////////
import firebaseInfo from './Firebase/firebase'
import { doc, getDoc, getFirestore, initializeFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

initializeApp({
  apiKey: "AIzaSyAod8iXmI1vB94RFNyfs2RJh4hNivQXV9U",
  authDomain: "beewell-55d9d.firebaseapp.com",
  projectId: "beewell-55d9d",
  storageBucket: "beewell-55d9d.appspot.com",
  messagingSenderId: "49568944671",
  appId: "1:49568944671:web:379b0295b56970b2a97b2a",
  measurementId: "G-WRE2EGJ8KQ"
});

const firestore = getFirestore();
const specialOfTodayDay = doc(firestore, 'account code generated/20230101')
const specialOfTheDay = doc(firestore, 'Test/Doc1')

async function readSingleDocument() {
  const mySnapshot = await getDoc(specialOfTheDay)
  if (mySnapshot.exists())
  {
    console.log(`found that shit`);
    console.log(specialOfTheDay);
      //const docData = mySnapshot.data(emotionValue);
      //const docData = mySnapshot.data(Doc1);
      //console.log(`My data is ${JSON.stringify()}`);
      //return(docData);
      
  }
  else{console.log(`couldnt find that shit`);}
  
}
const data1 = readSingleDocument();


const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator 
      initialRouteName="LogEntry"
      screenOptions={{
        //tabBarActiveTintColor: '#e91e63',
      }}
    >
      <Tab.Screen 
        name="Statistics" 
        component={StatisticsScreen}
        options={{
          tabBarLabel: 'Statistics',

          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="chart-pie" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen 
        name="LogEntry"   
        component={LogEntryScreen} 
        options={{
          tabBarLabel: 'Log',
          tabBarIcon: ({ color, size }) => (
            //Want to use edit
            <MaterialCommunityIcons name="note-edit-outline" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen 
        name="Calendar" 
        component={CalendarScreen} 
        options={{
          tabBarLabel: 'Calendar',
          tabBarIcon: ({ color, size }) => (
            //Want to use calendar_view_month
            <MaterialCommunityIcons name="calendar-month-outline" color={color} size={size} />
          ),
        }}
       />
     
    </Tab.Navigator>
  )
}

const Stack = createNativeStackNavigator();

export function StackNavigator() {
  return(
    <NavigationContainer>

      <Stack.Navigator initialRouteName="Login" headermode='null'>

        <Stack.Screen 
          name="Login" 
          component={LoginScreen}
          options={{ title: 'BeeWell' }}
        />
        <Stack.Screen 
          name="CreateAccount" 
          component={CreateAccountScreen}
          options={{ title: 'BeeWell' }}
        />
        <Stack.Screen 
          name="Tabs"
          component={Tabs}
          options={{ title: 'Logout' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default function App() {
  return (    
      <StackNavigator />
  );
}

//What about getting the current route and set it so that recompiling wouldnt bring you back to login, but you wouldnt recompile during use so that wouldnt make sense

