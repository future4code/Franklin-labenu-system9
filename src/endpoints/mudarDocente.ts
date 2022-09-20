import { Request, Response } from "express";
import altdocente from "../data/altDocent";

export default async function mudarDocente(req:Request, res:Response)  {
    try{
        if(!req.body.id || !req.body.turma_id ){
            res.status(400).send("É necessário enviar o id e modulo da turma para realizar a alteração")
        }else {
            await altdocente(
                req.body.id,
                req.body.turma_id,
            )    
            res.status(200).send("Turma alterada com sucesso!")
        }
    }catch(error){
        res.status(400).send({message:error})
    }
}