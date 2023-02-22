import React from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity} from 'react-native';

export default function Middle({ navigation }){

    const pressHandler = (nav_direction) => {
        navigation.navigate(nav_direction);
       //navigation.push('Left');
       alert("You pressed " + nav_direction);
    }

    return (
        <View style={styles.container}>

            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>Middle Screen</Text>
            </View>

            <View style={styles.buttonContainer}>
                <Button title='Go Left'  style={styles.userButton} onPress={pressHandler.bind("Left")}/>
                <Button title='Go Right'  style={styles.userButton} onPress={()=>pressHandler('Right')}/>
                
                {/*
                <TouchableOpacity  style={styles.userButton} onPress={pressHandler('Left')}>
                    <Text style={styles.buttonText}>Go Left</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.userButton} onPress={pressHandler('Right')}>
                    <Text style={styles.buttonText}>Go Right</Text>
                </TouchableOpacity>
                */}

                
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFCD02", 
        justifyContent: "center",
        alignItems: "center",
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "50%",
    },
    userButton: {
        backgroundColor: "#fff",
        width: "30%",
        padding: 15,
    },
    titleText:{
        fontSize: 20,
    },
    buttonText: {
        fontsize: 10,
        textAlign: "center",
    },
    titleContainer: {
        padding: 50,
    }
});