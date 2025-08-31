import { point } from './point.js'

export class cercle{

    constructor(x,y,rayon,angleDepart = 0, sensAntiHoraire = 2 * Math.PI){
        this.x = x;
        this.y = y;
        this.rayon = rayon;
        this.angleDepart = angleDepart;
        this.sensAntiHoraire = sensAntiHoraire;
        this.vitesse = 0.1
        this.phase = "aggrandissement"
    }

    centre = () => {
        return new point(this.x,this.y)
    }

    dessiner = (ctx) => {
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.rayon,this.angleDepart,this.sensAntiHoraire);
        ctx.fillStyle = "white";
        ctx.fill(); 
        ctx.stroke();
    }

    mettreAJour = () => {

        if(this.phase === "aggrandissement"){
            this.rayon += this.vitesse;
            if(this.rayon >= 30){
                this.phase = "retrecissement"
            }
        }else{
            if(this.rayon >= 0.1){
                this.rayon -= this.vitesse;
            }
        }
    }

    contient = () => {
        
    }
}