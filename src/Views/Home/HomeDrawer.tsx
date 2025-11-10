import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

function Home() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
                onPress={() =>
                    console.log("Go to notifications pressed")
                    //  navigation.navigate('Notifications')

                }
                title="Go to notifications"
            />
        </View>
    );
}

export function NotificationsScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Notifications Screen</Text>
            <Button onPress={() =>
                // navigation.goBack()
                console.warn("Go back home pressed")
            }

                title="Go back home" />
        </View>
    );
}

const Drawer = createDrawerNavigator();

function HomeDrawer() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="Notifications" component={NotificationsScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default HomeDrawer;