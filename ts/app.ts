import { Application, application, request, response } from "express";
import express,{Request,Response} from 'express';

const app:Application = express();

app.get("/", (req:Request,res:Response) => {
    res.send("ok");
});

app.listen(5000,()=>{
    console.log("server iniciado en puerto 5000");
})