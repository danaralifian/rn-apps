import React, { Component } from 'react'
import { Image, Text, View } from 'react-native'
import { Point, cPoint } from './ClassPoint.test'

function Banner(){
    let a : string
    let age : number = 3
    let hobby : string[] = ['coding','writing']
    let isUser : boolean = true
    
    let message;
    message = 'abc';
    let endWithC = (message as string)
    
    let pointPrint
    let drawPoint = (point : Point)=>{
        pointPrint = JSON.stringify(point)
    }

    let distance
    let getDistance = (pointA : Point, pointB : Point)=>{
        distance = JSON.stringify(pointA) + JSON.stringify(pointB)
    }

    getDistance(
        { x : 1, y : 'a' }, 
        { x : 1, y : 'a' }
    )

    drawPoint({
        x : 1,
        y : 'a'
    })
    let cPointNew = new cPoint(2, 'cyb')
    //#without constructor
    // cPointNew.cx = 2
    // cPointNew.cy = 'cyb'
    cPointNew.setCx(10)
    let printCpointNew = cPointNew.getCx()

    return (
        <View>
            <Text>{printCpointNew}</Text>
        </View>
    )
}

export default Banner