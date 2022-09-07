import connection from "../connection"

export default async function altestudante(
    id: string,
    turma_id: string): Promise<void> {
        await connection.raw(`UPDATE ESTUDANTE SET turma_id = ${turma_id} WHERE id = ${id}`)
    }