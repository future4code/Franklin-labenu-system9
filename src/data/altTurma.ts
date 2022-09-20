import connection from "../connection"

export default async function altturma(
    id: string,
    modulo: number): Promise<void> {
        await connection.raw(`UPDATE TURMA SET modulo = ${modulo} WHERE id = ${id}`)
    }