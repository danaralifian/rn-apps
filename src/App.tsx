import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '~/src/screens/HomeScreen'
import CartScreen from '~/src/screens/CartScreen'
import AccountScreen from '~/src/screens/AccountScreen'


class App extends Component {
    render() {
        const Stack = createStackNavigator()
        const Tab = createBottomTabNavigator()
        
        return (
            <NavigationContainer>
                {/* <Stack.Navigator>
                    <Stack.Screen name="Home" component={HomeScreen} />
                </Stack.Navigator> */}
                <Tab.Navigator>
                    <Tab.Screen name="Home" component={HomeScreen}/>
                    <Tab.Screen name="Cart" component={CartScreen}/>
                    <Tab.Screen name="Account" component={AccountScreen}/>
                </Tab.Navigator>
            </NavigationContainer>
        )
    }
}
export default App