import React from "react";

import { View, Text, Button, StyleSheet, TouchableOpacity, ActivityIndicator } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function LoadingButtonExample() {
    const [loading, setLoading] = React.useState(false);
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
           
                <Text>Item is loading {loading}</Text>
                <TouchableOpacity style={styles.button} onPress={() => setLoading(!loading)}>
                    {loading ? (<ActivityIndicator style={{backgroundColor:'black'}}></ActivityIndicator>) :
                        <Text style={styles.buttonText}>Start Loading</Text>}
                          <ActivityIndicator />
      <ActivityIndicator size="large" />
      <ActivityIndicator size="small" color="#0000ff" />
      <ActivityIndicator size="large" color="#00ff00" />
                </TouchableOpacity>
                {/* <TouchableOpacity style={styles.button} onPress={() =>setLoading(false)}>    
                <Text style={styles.buttonText}>Go to Home</Text>
            </TouchableOpacity> */}
           
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
     
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    button: {
       flex:1,
        backgroundColor: 'white',
        paddingVertical: 12,
        paddingHorizontal: 20,
        justifyContent: 'center',
        marginTop: 10,
        borderRadius: 5,
        height: 80,
        width:100,
    },
    buttonText: {
        flex: 1,
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        justifyContent: 'center',
    },
});