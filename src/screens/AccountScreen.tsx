import React, { Component } from 'react'
import { Image, Text, View } from 'react-native'
import images from '~/src/assets/images'

class AccountScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text> Account Screen </Text>
                <Image source={images.banner} style={{height : 100}}/>
            </View>
        )
    }
}
export default AccountScreen