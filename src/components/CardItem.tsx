import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Image, Button } from 'react-native'
import images from '~/src/assets/images'

function CardItem({data}) {
    useEffect(()=>{
        
    })

    const onPress=()=>{

    }

    function currencyFormat(num) {
        return 'Rp.' + num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri : data.images.large_urls[0]}}/>
            <View style={styles.content}>
                <Text numberOfLines={2} style={styles.name}>{data.name}</Text>
                <Text style={styles.price}>{currencyFormat(data.price)}</Text>
                <Button color={'#ff8c25'} onPress={onPress} title='Add To Cart'/>
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
        marginBottom : 5,
        height : 35
    },
    price : {
        fontWeight : 'bold',
        marginBottom : 5
    }
})

export default CardItem
