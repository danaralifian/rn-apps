import React, { Component } from 'react'
import { Image, Text, View } from 'react-native'

function Banner(){
    let a : string
    let age : number = 3
    let hobby : string[] = ['coding','writing']
    let isUser : boolean = true
    
    let message;
    message = 'abc';
    let endWithC = (message as string)

    //iterface cohesion
    interface Point{
        x : number,
        y : string,
    }
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

    //class
    class cPoint {
        cx : number
        cy : string

        // [?] => its means optional paramter
        constructor(cx? : number, cy? : string){
            this.cx = cx
            this.cy = cy
        }

        draw(){
            return 'X : '+ this.cx + ' Y : '+this.cy
        }

        getDistance(otherPoint : Point){}
    }

    let cPointNew = new cPoint(2, 'cyb')
    //#without constructor
    // cPointNew.cx = 2
    // cPointNew.cy = 'cyb'
    let printCpointNew = cPointNew.draw()

    return (
        <View>
            <Text>{printCpointNew}</Text>
        </View>
    )
}

export default Banner