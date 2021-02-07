import { Application, application, request, response } from "express";
import express,{Request,Response} from 'express';
import Archivo from './Archivo';

declare var visitas1: number;

const app:Application = express();

app.get("/items", (req:Request,res:Response) => {
    let items = Obteneritems();
    console.log(visitas1);
    visitas1 ++;
    res.send(items);
});

app.get("/item-random", (req:Request,res:Response) => {
    const file = new Archivo('./Productos.txt');
    let productos = JSON.parse(file.Leer());
    let miobj = {
        "item": productos[Math.floor(Math.random() * productos.length)]
    }
    res.send(miobj);
});

app.get("/visitas", (req:Request,res:Response) => {
    let miobj = {
        "visitas": [{
            "items": "items",
            "cantidad": 0 //variable visitas1
        },
        {
            "items": "item-random",
            "cantidad": 0 //variable visitas2
        }]
    }
    res.send(miobj);
});

app.listen(8080,()=>{
    console.log("server iniciado en puerto 8080");
});

function Obteneritems() {
    const file = new Archivo('./Productos.txt');
    let productos = JSON.parse(file.Leer());
    var miobj = {
        "items": productos,
        "cantidad": productos.length
    }
    return miobj;
}
