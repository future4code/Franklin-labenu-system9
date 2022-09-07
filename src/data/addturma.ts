import connection from "../connection"

export default async function addturma(
    id: string,
    nome: string,
    turma_ativa: string,
    modulo: number): Promise<void> {
        await connection.insert({
            id,
            nome,
            turma_ativa,
            modulo
        }).into('TURMA')
    }