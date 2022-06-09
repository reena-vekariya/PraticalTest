import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Screens
import Splash from '../containers/Splash';
import Login from '../containers/Login';
import Pin from '../containers/Pin';
import DeviceSettings from '../containers/DeviceSettings';
import FunctionalitiesSettings from '../containers/FunctionalitiesSettings';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                options={{
                    headerShown: false,
                }}
                name="Splash"
                component={Splash}
            />
            <Stack.Screen
                options={{
                    headerShown: false,
                }}
                name="Login"
                component={Login}
            />
            <Stack.Screen
                options={{
                    headerShown: false,
                }}
                name="Pin"
                component={Pin}
            />
            <Stack.Screen
                options={{
                    headerShown: false,
                }}
                name="DeviceSettings"
                component={DeviceSettings}
            />
            <Stack.Screen
                options={{
                    headerShown: false,
                }}
                name="FunctionalitiesSettings"
                component={FunctionalitiesSettings}
            />
            </Stack.Navigator>
        </NavigationContainer>
    )
}