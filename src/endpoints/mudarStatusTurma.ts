import { Request, Response } from "express";
import altstatusturma from "../data/altstatusturma";

export default async function mudarStatusTurma(req:Request, res:Response)  {
    try{
        if(!req.body.turma_ativa || !req.body.id ){
            res.status(400).send("É necessário enviar o id e status da turma para realizar a alteração")
        }else {
            await altstatusturma(
                req.body.id,
                req.body.turma_ativa,
            )    
            res.status(200).send("status da turma alterado com sucesso!")
        }
    }catch(error){
        res.status(400).send({message:error})
    }
}