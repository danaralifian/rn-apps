import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { configureFonts, DefaultTheme, Provider as PaperProvider } from 'react-native-paper'

import HomeScreen from '~/src/screens/HomeScreen'
import CartScreen from '~/src/screens/CartScreen'
import AccountScreen from '~/src/screens/AccountScreen'

function App() {
    const Stack = createStackNavigator()
    const Tab = createBottomTabNavigator()

    const fontConfig = {
        default: {
          regular: {
            fontFamily: 'ubuntu',
            fontWeight: 'normal',
          },
          medium: {
            fontFamily: 'ubuntu',
            fontWeight: 'normal',
          },
          light: {
            fontFamily: 'ubuntu',
            fontWeight: 'ubuntu',
          },
          thin: {
            fontFamily: 'ubuntu',
            fontWeight: 'normal',
          },
        },
    };
    
    const theme = {
        ...DefaultTheme,
        fonts: configureFonts(fontConfig),
    };
        
    return (
        <PaperProvider theme={theme}>
            <NavigationContainer>
                {/* <Stack.Navigator>
                    <Stack.Screen name="Home" component={HomeScreen} />
                </Stack.Navigator> */}
                <Tab.Navigator>
                    <Tab.Screen 
                        name="Home" 
                        component={HomeScreen}
                        options={{
                            tabBarLabel : 'Home',
                            tabBarIcon : ({focused, color , size})=>{
                                return <AntDesign name='home' color={color} size={size}/>
                            }
                        }}/>
                    <Tab.Screen name="Cart" component={CartScreen}/>
                    <Tab.Screen name="Account" component={AccountScreen}/>
                </Tab.Navigator>
            </NavigationContainer>
        </PaperProvider>
    )
}
export default App