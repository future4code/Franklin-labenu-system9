import connection from "../connection"

enum periodoTurma{
    integral = "integral",
    noturno = "noturno"
}
export default async function addturma(
    id: string,
    nome: string,
    modulo: number,
    periodo: periodoTurma) {
        await connection.insert({
            id,
            nome,
            modulo
        }).into('TURMA')
    }