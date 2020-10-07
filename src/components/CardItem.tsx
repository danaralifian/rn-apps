import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Image, Button } from 'react-native'
import images from '~/src/assets/images'

function CardItem({data}) {
    useEffect(()=>{
        
    })

    const onPress=()=>{

    }

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={images.banner}/>
            <View style={styles.content}>
                <Text style={styles.name}>{data.name}</Text>
                <Button onPress={onPress} title='Tambah Ke'/>
            </View>
        </View> 
    )
}

const styles = StyleSheet.create({
    container : {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 1,
        borderRadius : 3,
        width : '50%',
        margin : 5,
        flex : 1
    },
    image : {
        width : '100%',
        height : 150,
        resizeMode : 'cover',
        borderTopLeftRadius : 3,
        borderTopRightRadius : 3
    },
    content : {
        padding : 10
    },
    name : {
        marginBottom : 10
    }
})

export default CardItem
