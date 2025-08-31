import { cercle } from './cercle.js'
import { point } from './point.js'

let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");
let listeCercles = []
let nombreDeVie = 3;
let temps = 500;

canvas.addEventListener("mousedown", (event) => {
    for(let circle of listeCercles){
        let rectangle = canvas.getBoundingClientRect();
        let posSouris = new point(event.clientX-rectangle.left,event.clientY - rectangle.top)
        let centreCercle = circle.centre()        
        if(point.estDansLeCercle(posSouris,centreCercle,circle.rayon)){
            supprimer(circle);
        } 
    }
})

const afficher = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    if(nombreDeVie > 0){
        for(let x of listeCercles){
            if(x.rayon <= 0.1 && x.phase === "retrecissement"){
                supprimer(x)
                nombreDeVie -= 1;
            }else{
                x.mettreAJour();
                x.dessiner(ctx);
            }
        }
        requestAnimationFrame(afficher)   
    }else{
        alert("perdu")
    }
}

const creerCercle = () => {
    let x = Math.random() * 450
    let y = Math.random() * 350
    let circle = new cercle(x,y,0,0,2 * Math.PI);
    listeCercles.push(circle)
    circle.dessiner(ctx);
}

const supprimer = (cercle) => {
    let index = listeCercles.indexOf(cercle)
    listeCercles.splice(index,1)
}

const main = () => {
    setInterval(creerCercle,temps)
    afficher()
}

main()

