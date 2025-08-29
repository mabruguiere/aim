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

    dessiner = (ctx) => {
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.rayon,this.angleDepart,this.sensAntiHoraire);
        ctx.stroke();
    }

    mettreAJour = () => {

        if(this.phase === "aggrandissement"){
            this.rayon += this.vitesse;
            if(this.rayon >= 25){
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