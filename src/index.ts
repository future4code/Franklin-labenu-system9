import app from "./app";
import criarDocente from "./endpoints/criarDocente";
import criarEstudante from "./endpoints/criarEstudante";
import criarTurma from "./endpoints/criarTurma";


app.post('/turma/criar',criarTurma)
app.post('/estudante/criar',criarEstudante)
app.post('/docente/criar',criarDocente)

