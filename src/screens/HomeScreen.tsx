import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'


export class HomeScreen extends Component {
  render() {
    return (
      <SafeAreaView>
      <View>
        <Text> textInComponent </Text>
      </View>
      </SafeAreaView>
    )
  }
}

export default HomeScreen
