//iterface cohesion
export interface Point{
    x : number,
    y : string,
}

export class cPoint {
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

    getCx(){
        return this.cx
    }

    setCx(value : number){
        if(value < 0)
            throw new Error('value cannot be less than 0')
        this.cx = value
    }
}