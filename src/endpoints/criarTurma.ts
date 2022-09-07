import { Request, Response } from "express";
import addturma from "../data/addturma";


export default async function criarTurma(req:Request, res:Response)  {
    try{
        let nomeTurma = req.body.nome
        if(!req.body.nome || !req.body.periodo ){
            res.status(400).send("É necessário enviar o nome e o periodo da turma para realizar a criação")
        }else if(req.body.periodo !== "integral" && req.body.periodo !== "noturno"){
            res.status(400).send("é necessário enviar o perido 'integral' ou 'noturno' para prosseguirmos com o cadastro da turma")
        }else {
            if(req.body.periodo === "noturno"){ 
            nomeTurma = nomeTurma+"-na-night";
            }
            const id:string = Date.now().toString()
            await addturma(
                id,
                nomeTurma,
                "sim",
                0, 
            )    
            res.status(200).send("Turma criada com sucesso!")
        }
    }catch(error){
        res.status(400).send({message:error})
    }
}
