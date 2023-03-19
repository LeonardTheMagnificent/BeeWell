import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, Button, StyleSheet} from 'react-native';

function LoginScreen({ navigation }) {
    return (
      <View style={styles.mainView}>
        <Text>Login Screen</Text>
        <Button
          title="Go Log Entry"
          onPress={() => navigation.navigate("LogEntry")}
        />
        <Button
          title="Go Create Account"
          onPress={() => navigation.navigate("CreateAccount")}
        />
      </View>
    );
  }

  function CreateAccountScreen({ navigation }) {
    return (
      <View style={styles.mainView}>
        <Text>Create Account Screen</Text>
        <Button
          title="Go Login"
          onPress={() => navigation.navigate("Login")}
        />
      </View>
    );
  }

function LogEntryScreen({ navigation }) {
  return (
    <View style={styles.mainView}>
      <Text>Log Entry Screen</Text>
      <Button
        title="Go Statistics"
        onPress={() => navigation.navigate("Statistics")}
      />
      <Button
        title="Go Calendar"
        onPress={() => navigation.navigate("Calendar")}
      />
    </View>
  );
}

function StatisticsScreen({ navigation }) {
    return (
      <View style={styles.mainView}>
        <Text>Statistics Screen</Text>
        <View style={StyleSheet.buttonContainer}>
            <Button
                title="Go Log Entry"
                onPress={() => navigation.navigate("LogEntry")}
                style={StyleSheet.buttons}
            />
            <Button
                title="Go Calendar"
                onPress={() => navigation.navigate("Calendar")}
                style={StyleSheet.buttons}
            />
        </View>
      </View>
    );
  }

  function CalendarScreen({ navigation }) {
    return (
      <View style={styles.mainView}>
        <Text>Calendar Screen</Text>
        <Button
          title="Go Log Entry"
          onPress={() => navigation.navigate("LogEntry")}
        />
        <Button
        title="Go Statistics"
        onPress={() => navigation.navigate("Statistics")}
      />
      </View>
    );
  }

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        
        <Stack.Screen 
          name="Login" 
          component={LoginScreen}
        />
        <Stack.Screen 
          name="CreateAccount" 
          component={CreateAccountScreen}
        />
        <Stack.Screen 
          name="LogEntry" 
          component={LogEntryScreen}
        />
        <Stack.Screen 
          name="Statistics" 
          component={StatisticsScreen} 
        />
        <Stack.Screen 
          name="Calendar" 
          component={CalendarScreen}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
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
});
