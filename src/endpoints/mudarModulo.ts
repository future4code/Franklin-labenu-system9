import { Request, Response } from "express";
import altturma from "../data/altTurma";

export default async function mudarModulo(req:Request, res:Response)  {
    try{
        if(!req.body.modulo || !req.body.id ){
            res.status(400).send("É necessário enviar o id e modulo da turma para realizar a alteração")
        }else {
            await altturma(
                req.body.id,
                req.body.modulo,
            )    
            res.status(200).send("modulo alterado com sucesso!")
        }
    }catch(error){
        res.status(400).send({message:error})
    }
}