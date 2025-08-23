export class cercle{

    constructor(x,y,rayon,angleDepart = 0, sensAntiHoraire = 2 * Math.PI){
        this.x = x;
        this.y = y;
        this.rayon = rayon;
        this.angleDepart = angleDepart;
        this.sensAntiHoraire = sensAntiHoraire;
    }

    dessiner = (ctx) => {
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.rayon,this.angleDepart,this.sensAntiHoraire);
        ctx.stroke();
    }
}