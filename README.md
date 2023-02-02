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

<h1 style="font-family: 'Sans';"> As 4 Camadas da Clean Architecture </h1>

<h3>Na Arquitetura limpa temos portas e adaptadores </h3>
<details>
EX: Neste projeto o /src/infra/http/express/index.ts é o nosso adpatador e o src/application/...     são nossas portas.
<summary><a>Ler mais</a>
</summary>
<p>Padrões relacionados</p> 
<p>Adaptador:</p>
O livro ''Design Patterns'' contém uma descrição do padrão genérico ''Adapter'': "Converter a interface de uma classe em outra interface que os clientes esperam". O padrão de portas e adaptadores é um uso particular do padrão ''Adaptador''.
<p></p> 
Model-View-Controller:<p></p> (Controladora de visualização de modelo)
O padrão MVC foi implementado já em 1974 no projeto Smalltalk. Tem sido dado, ao longo dos anos, muitas variações, como Model-Interactor e Model-View-Presenter. Cada um deles implementa a ideia de portas e adaptadores nas portas primárias, não nas portas secundárias.

<a href="https://alistair.cockburn.us/hexagonal-architecture/">Fonte</a>

</details>

![#](https://placehold.co/380x1/ffa500/ffa500.png)

## ENTITIES

- Regras de neǵocio consolidadas
- - Arquivo com a entidade <a href="https://github.com/guilhermeforprojeto/clean_architecture/blob/main/src/domain/route.entity.ts"> `/src/domain/route.entity.ts` </a><p> As as regras de negócio, validações</p>
- - - <a href="https://github.com/guilhermeforprojeto/clean_architecture/blob/main/src/domain/route.entity.spec.ts"> `/src/domain/route.entity.spec.ts` </a> <p>Todas regras devem ter testes unitários para ser seguro</p>

- Modelagem de dados

</p>
<br>
<hr>
<br>

![#](https://placehold.co/380x1/f87a58/f87a58.png)

## USE CASES

- Arquivo com caso de uso <a href="https://github.com/guilhermeforprojeto/clean_architecture/blob/main/src/application/create_route.use_case.ts"> `/src/application/create_route.use_case.ts` </a><p> O caso de uso, por exemplo os tipos de input e output, obriga informa a entrada de alguns dados cruciais para o funcionamento</p><p>`CreateRouteInput` nesta aplicação é a porta do caso de uso The Pattern: Ports and Adapters (‘’Object Structural’’) como diz no <a href="https://alistair.cockburn.us/hexagonal-architecture/">link.</a> Desta forma a `INFRA, PRESENTERS & REPOSITORIES` vai precisar se adpatar aos casos de uso e nunca o inverso. <p>Permitir que um aplicativo seja igualmente conduzido por usuários, programas, scripts automatizados de teste ou em lote, e seja desenvolvido e testado isoladamente de seus eventuais dispositivos e bancos de dados de tempo de execução.
</p>
</p>

- - <img width="190" src="https://alistair.cockburn.us/wp-content/uploads/2018/02/Hexagonal-architecture-pic-1-to-4-socket.jpg" ></img>
  <br>
  <hr>
  <br>

![#](https://placehold.co/380x1/7ee23b/7ee23b.png)

## INFRA, PRESENTERS & REPOSITORIES

- Arquivo com a infra <a href="https://github.com/guilhermeforprojeto/clean_architecture/blob/main/src/infra/http/express/index.ts"> `/src/infra/http/express/index.ts` </a><p> A infra, aqui onde vamos usar para passar os dados da requisição da entidade usando os casos de uso</p><p>Utlizamos a extenção `REST Client` para testar o POST na aplicação.</p>

</p>
<br>
<hr>
<br>

![#](https://placehold.co/380x1/c6e2ff/c6e2ff.png)

## UI, DB & WEB
