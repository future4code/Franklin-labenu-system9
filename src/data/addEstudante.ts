import connection from "../connection"


export default async function addestudante(
    id: string,
    nome: string,
    email: string,
    datanasc: string,
    hobbies:string[],
    turmaid:string): Promise<void> {
        await connection.insert({
            id,
            nome,
            email,
            datanasc,
            turma_id: turmaid
        }).into('ESTUDANTE')
        for (let hobby of hobbies){
        const idhobbie:string = Date.now().toString()
        await connection.insert({
            id: idhobbie,
            nome: hobby,
        }).into('HOBBY')
        const idhobbieestudante:string = Date.now().toString()
        await connection.insert({
            id: idhobbieestudante,
            estudante_id: id,
            hobby_id: idhobbie 
        }).into('ESTUDANTE_HOBBY')
    }
    }