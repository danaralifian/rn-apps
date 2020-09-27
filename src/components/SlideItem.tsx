import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import images from '~/src/assets/images.ts'

function SlideItem() {
    const items = [
        {name : 'Elektronik', image : images.electronic},
        {name : 'Handphone', image : images.smartphone},
        {name : 'Pakaian', image : images.shirt},
        {name : 'Sepatu', image : images.shoes},
        {name : 'Hiburan', image : images.entertainment},
        {name : 'Sehari-hari', image : images.lifestyle},
    ]
    useEffect(()=>{

    })
    return (
        <View style={styles.container}>
            <ScrollView horizontal={true} style={styles.scroll}>
                {items.map((obj, key)=>
                    <View key={key} style={styles.containerItem}>
                        <Image source={obj.image} style={styles.img}/>
                        <Text>{obj.name}</Text>
                    </View>
                )}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container  : {
        marginTop : 25,
        width : '100%',
        height : 50,
        paddingVertical : 10,
        paddingHorizontal : 10
    },
    containerItem : {
        paddingVertical : 5,
        paddingHorizontal : 15,
        borderRadius : 25,
        flexDirection : 'row',
        borderWidth : 1,
        borderColor : '#ddd',
        justifyContent : 'center',
        marginRight : 8
    },
    img : {
        width : 26,
        height : 'auto',
        resizeMode : 'contain'
    },
    scroll : {
       
    }
})

export default SlideItem
