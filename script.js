import { cercle } from './cercle.js'

let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");
let listeCercles = []
let nombreDeVie = 3;

canvas.addEventListener("click", () => {
    for(let x of listeCercles){
        // if souris dans cercle 
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
                console.log(x.x,x.y,x.rayon)
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
    setInterval(creerCercle,1000)
    afficher()
}

main()

