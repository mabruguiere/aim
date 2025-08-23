import { cercle } from './cercle.js'

let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");
let listeCercles = []
let nombreDeVie = 3;

const afficher = () => {
    for(let x of listeCercles){
        x.dessiner(ctx);
        console.log(x.x,x.y,x.rayon)
    }
}

const aggrandir = () => {
    for(let x of listeCercles){
        aggrandirCercle(x);
    }
}

const creerCercle = () => {
    let x = Math.random() * 450
    let y = Math.random() * 350
    let circle = new cercle(x,y,0,0,2 * Math.PI);
    listeCercles.push(circle)
}

const aggrandirCercle = (cercle) => {
    while (cercle.rayon < 25){
        cercle.rayon += 1
    }
    while (cercle.rayon > 0){
        cercle.rayon -= 1
    }
    if (cercle.rayon === 0){
        //supprimer(cercle)
        nombreDeVie -= 1;
    }
}

const supprimer = (cercle) => {
    let index = listeCercles.indexOf(cercle)
    listeCercles.splice(index,1)
}

setInterval(creerCercle,1000)
aggrandir()
afficher()

