import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PropTestChildComponent from './proptestChildComponent';

const styles = StyleSheet.create({
    container: {

    },
    headingText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        backgroundColor: 'lightgray',
        padding: 10,

    }
})

function greetUser(name: string): string {
    return `Hello, ${name}! Welcome to the Proptest component.`;
}

function greetUser1(): string {
    return `Hello, Guest! Welcome to the Proptest component.`;
}

export default function Proptest() {

    return (
        <View>
            <Text style={[styles.headingText]}>PropTest from User {greetUser("test")}</Text>
            {childComponent("Hello from Proptest")}
            <PropTestChildComponent message="hello" user={{ name: 'test', age: 10 }} wow="abcd" callback={greetUser} />
        </View>
    );
}

function childComponent(message: string) {
    return (
        <View>
            <Text>message is : {message}</Text>
        </View>
    );
}

function ChildComponent1(callback = () => { }) {
    return (
        <View>
            <Text>The value from context is:  </Text>
        </View>
    );
}



