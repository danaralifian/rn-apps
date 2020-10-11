import React, { Component, useEffect, useState } from 'react'
import { Text, View, StyleSheet, Alert, FlatList } from 'react-native'
import axios from 'axios'

import Banner from '~/src/components/Banner'
import FundamentalTest from '~/src/test/fundamental.test'
import SlideItem from '~/src/components/SlideItem'
import CardItem from '~/src/components/CardItem'
import { ScrollView } from 'react-native-gesture-handler'
import { Product } from '~/src/models/product.models'

function HomeScreen() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(()=>{
    getBestDeals()
  })

  const getBestDeals=()=>{
    axios({
      url : 'https://simple-api-mongodb.herokuapp.com/shop/products',
      method : 'GET'
    })
    .then(res=>{
      setProducts(res.data.data)
    })
    .catch(err=>{
      Alert.alert('errror')
    })
    .finally(()=>{
      
    })
  }

  const renderItem=({item})=>{
    return(
      <CardItem data={item}/>
    )
  }


  return (
    <View style={{ flex: 1}}>
      <ScrollView>
        <SlideItem/>
        <View style={styles.container}>
          <Text style={styles.label}>Best Deals</Text>
          <View>
            <FlatList
              data={products}
              renderItem={renderItem}
              keyExtractor={item=>item.id}
              numColumns={2}
              />
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
      padding : 5,
    },
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
    },
    label : {
      marginBottom : 5,
      fontWeight : 'bold',
      fontSize : 16,
      paddingLeft : 5,
      paddingRight : 5,
      fontFamily : 'ubuntu'
    }
  });
  
export default HomeScreen