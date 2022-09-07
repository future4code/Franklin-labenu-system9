import connection from "../connection"

export default async function pegarestudante( 
    nome: string
){
    const result = await connection('ESTUDANTE')
    .select('*')
    .where({ nome })

    return result[0]
}
