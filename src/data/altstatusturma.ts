import connection from "../connection"

export default async function altstatusturma(
    id: string,
    turma_ativa: string): Promise<void> {
        await connection.raw(`UPDATE TURMA SET turma_ativa = "${turma_ativa}" WHERE id = ${id}`)
    }