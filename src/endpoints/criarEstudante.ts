import { Request, Response } from "express";
import addestudante from "../data/addEstudante";


export default async function criarEstudante(req:Request, res:Response)  {
    try{
        if(!req.body.nome ||
            !req.body.email ||
            !req.body.datanasc ||
            !req.body.hobbies ||
            !req.body.turmaid ){
            res.status(400).send("É necessário enviar o nome,email, data de nascumento, hobbies e turma para realizar a criação")
        }else {
            const id:string = Date.now().toString()
            await addestudante(
                id,
                req.body.nome,
                req.body.email,
                req.body.datanasc,
                req.body.hobbies,
                req.body.turmaid
            )    
            res.status(200).send("Estudante criado com sucesso!")
        }

    }catch(error){
        res.status(400).send({message:error})
    }
}
