export class point{

    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    
    static estDansLeCercle(point1, point2, rayon){
        return Math.sqrt((point2.x-point1.x)*(point2.x-point1.x) + (point2.y-point1.y)*(point2.y-point1.y)) < rayon
    }

}