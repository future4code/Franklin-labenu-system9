import connection from "../connection"

export default async function altdocente(
    id: string,
    turma_id: string): Promise<void> {
        await connection.raw(`UPDATE DOCENTE SET turma_id = ${turma_id} WHERE id = ${id}`)
    }