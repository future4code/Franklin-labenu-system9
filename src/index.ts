import app from "./app";
import buscarDocentes from "./endpoints/buscarDocentes";
import buscarEstudante from "./endpoints/buscarEstudante";
import buscarTurma from "./endpoints/buscarTurma";
import criarDocente from "./endpoints/criarDocente";
import criarEstudante from "./endpoints/criarEstudante";
import criarTurma from "./endpoints/criarTurma";
import mudarDocente from "./endpoints/mudarDocente";
import mudarEstudante from "./endpoints/mudarEstudante";
import mudarModulo from "./endpoints/mudarModulo";
import mudarStatusTurma from "./endpoints/mudarStatusTurma";


app.post('/turma/criar',criarTurma)
app.post('/estudante/criar',criarEstudante)
app.post('/docente/criar',criarDocente)

app.put('/turma/alt/modulo',mudarModulo)
app.put('/turma/alt/status',mudarStatusTurma)
app.put('/estudante/alt/turma',mudarEstudante)
app.put('/docente/alt/turma',mudarDocente)

app.get('/turmas',buscarTurma)
app.get('/docentes',buscarDocentes)
app.get('/estudante/:nome',buscarEstudante)


