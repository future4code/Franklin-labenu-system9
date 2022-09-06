import connection from "../connection"

export default async function adddocente(
    id: string,
    nome: string,
    email: string,
    datanasc: string,
    especialidades:string[],
    turmaid:string): Promise<void> {
        await connection.insert({
            id,
            nome,
            email,
            datanasc,
            turma_id: turmaid
        }).into('DOCENTE')
        for (let especialidade of especialidades){
        const idespecialidade:string = Date.now().toString()
        await connection.insert({
            id: idespecialidade,
            nome: especialidade,
        }).into('ESPECIALIDADE')
        const idespecialidadedocente:string = Date.now().toString()
        await connection.insert({
            id: idespecialidadedocente,
            docente_id: id,
            especialidade_id: idespecialidade 
        }).into('DOCENTE_ESPECIALIDADE')
    }
    }