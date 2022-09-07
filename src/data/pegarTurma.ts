import connection from "../connection"

export default async function pegarturma(){
    const result = await connection.raw(`SELECT nome FROM TURMA WHERE turma_ativa= "sim" `)

    return result[0]
}