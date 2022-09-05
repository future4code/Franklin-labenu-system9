## Grupo:

### Andre Luiz Santolin
### Carolina Bratos de Oliveira Almeida
### Danyelle A Candido

## LabenuSystem:

Nosso sistema possui 3 entidades importantes, são elas:

1. Estudantes 

    Representa estudantes da nossa instituição. Eles possuem: id, nome, email, data de nascimento e os principais hobbies dos estudantes. 

2. Docente

    Representa docentes da nossa instituição. Eles possuem: id, nome, email, data de nascimento e todas as especialidades dele. Há 7 especialidades: React, Redux, CSS, Testes, Typescript, Programação Orientada a Objetos e Backend

3. Turma

    Toda turma é composta das seguintes características: id, nome, data de início, data de término, lista de professores responsáveis, uma lista de alunos e módulo atual em que a turma está.

    O módulo pode assumir os valores de 1 a 7 ou `undefined`, indicando que as aulas dessa turma ainda não começaram. Consideramos que existam dois tipos de turma: integral ou noturna. Há uma restrição para o nome das turmas noturnas: tem que terminar com `-na-night`.

As funcionalidades básicas da nossa aplicação são:

→ Criar estudante;

→ Criar docente;

→ Criar turma;

→ Adicionar estudante na turma;

→ Adicionar docente na turma;

→ Pegar a idade de algum estudante a partir do id
