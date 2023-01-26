## Clean Architecture

## :warning: Under development...

<p align="center">
<img  width=422 src="https://raw.githubusercontent.com/guilhermeforprojeto/clean_architecture/main/public/img/CleanArchitecture.jpg" ></img>

- Exemplo de arquitetura limpa seguindo os conceitho do livro Clean Architecture do autor <a href="https://en.wikipedia.org/wiki/Robert_C._Martin"> Robert Cecil Martin.</a>
</p>

- Execução desta aplicação:
- - `npm install typescript --salve-dev`
- - `npx tsc --init`

<hr>
</hr>

<h1 style="font-family: 'Sans';"> Sobre as 4 Camadas da Clean Architecture </h1>

![#](https://placehold.co/380x1/ffa500/ffa500.png)

## ENTITIES

- Regras de neǵocio consolidadas
- - Arquivo com a entidade <a href="https://github.com/guilhermeforprojeto/clean_architecture/blob/main/src/domain/route.entity.ts"> `/src/domain/route.entity.ts` </a><p> As as regras de negócio, validações</p>
- - - <a href="https://github.com/guilhermeforprojeto/clean_architecture/blob/main/src/domain/route.entity.spec.ts"> `/src/domain/route.entity.spec.ts` </a> <p>Todas regras devem ter testes unitários para ser seguro</p>

- Modelagem de dados

![#](https://placehold.co/380x1/f87a58/f87a58.png)

## USE CASES

-
- - Arquivo com caso de uso <a href="https://github.com/guilhermeforprojeto/clean_architecture/blob/main/src/application/create_route.use_case.ts"> `/src/application/create_route.use_case.ts` </a><p> Os casos de uso, por exemplo os tipos de input e output, obrigado informa a entrada de alguns dados cruciais para o funcionamento</p>

![#](https://placehold.co/380x1/7ee23b/7ee23b.png)

## INFRA, PRESENTERS & REPOSITORIES

![#](https://placehold.co/380x1/c6e2ff/c6e2ff.png)

## UI, DB & WEB
