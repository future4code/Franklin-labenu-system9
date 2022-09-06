import { Request, Response } from "express";
import adddocente from "../data/addDocente";


export default async function criarDocente(req:Request, res:Response)  {
    try{

        if(!req.body.nome ||
            !req.body.email ||
            !req.body.datanasc ||
            !req.body.especialidades ||
            !req.body.turmaid ){
            res.status(400).send("É necessário enviar o nome,email, data de nascumento, hobbies e turma para realizar a criação")
        }
       

        const id:string = Date.now().toString()
        await adddocente(
            id,
            req.body.nome,
            req.body.email,
            req.body.datanasc,
            req.body.especialidades,
            req.body.turmaid
        )    
        res.status(200).send("Docente criado com sucesso!")

    }catch(error){
        res.status(400).send({message:error})
    }
}