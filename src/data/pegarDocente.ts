import connection from "../connection"

export default async function pegardocente(){
        const result = await connection.raw(`SELECT nome FROM DOCENTE `)

        return result[0]
    }