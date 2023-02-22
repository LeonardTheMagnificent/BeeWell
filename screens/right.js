import React from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity} from 'react-native';

export default function Right({ navigation }){

    const pressHandler = () => {
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>Right Screen</Text>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity  style={styles.userButton} onPress={pressHandler()}>
                    <Text style={styles.buttonText}>Go to Middle</Text>
                </TouchableOpacity>
            </View>
            {/*<Button title='Go to middle' onPress={pressHandler}/>*/}

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "red", 
        justifyContent: "center",
        alignItems: "center",
    },
    titleContainer: {
        padding: 50,
    },
    titleText:{
        fontSize: 30,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "30%",
    },
    userButton: {
        backgroundColor: "#fff",
        width: "100%",
        padding: 15,
    },
    buttonText: {
        fontsize: 50, //not changing text size currently
        textAlign: "center",
    },
});