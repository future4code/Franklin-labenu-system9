import { Request, Response } from "express";
import pegarturma from "../data/pegarTurma";

export default async function buscarTurma(req:Request, res:Response)  {
    try{
        const result = await pegarturma()   
        res.status(200).send(result)
    }catch(error){
        res.status(400).send({message:error})
    }
}