import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Banner from '../components/Banner'
import FundamentalTest from '../test/fundamental.test'
import SlideItem from '~/src/components/SlideItem'

class HomeScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1}}>
                <SlideItem/>
                <View style={{ flex: 1}}>
                  <Text>body</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    root: {
      alignItems: 'center',
      alignSelf: 'center'
    },
    buttons: {
      flexDirection: 'row',
      minHeight: 70,
      alignItems: 'stretch',
      alignSelf: 'center',
      borderWidth: 5
    },
    button: {
      flex: 1,
      paddingVertical: 0
    },
    greeting: {
      color: '#999',
      fontWeight: 'bold'
    }
  });
  
export default HomeScreen