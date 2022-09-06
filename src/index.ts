import { create } from "domain";
import app from "./app";
import criarTurma from "./endpoints/criarTurma";


app.post('/turma/criar',criarTurma)

