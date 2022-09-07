import { Request, Response } from "express";
import pegarestudante from "../data/pegarEstudante";

export default async function buscarEstudante(req:Request, res:Response)  {
    try{
            const result = await pegarestudante(req.params.nome)    
            if(!result){
                res.status(400).send("estudante não encontrado")
            }
            res.status(200).send(result)
    }catch(error){
        res.status(400).send({message:error})
    }
}