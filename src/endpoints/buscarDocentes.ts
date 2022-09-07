import { Request, Response } from "express";
import pegardocente from "../data/pegarDocente";

export default async function buscarDocentes(req:Request, res:Response)  {
    try{
        const result = await pegardocente()   
        res.status(200).send(result)
    }catch(error){
        res.status(400).send({message:error})
    }
}