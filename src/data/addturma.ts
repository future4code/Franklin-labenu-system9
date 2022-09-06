import connection from "../connection"

export default async function addturma(
    id: string,
    nome: string,
    datainicio: string,
    datafim: string,
    modulo: number): Promise<void> {
        await connection.insert({
            id,
            nome,
            datainicio,
            datafim,
            modulo
        }).into('TURMA')
    }