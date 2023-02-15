## Clean Architecture

## :warning: Under development...

<p align="center">
<img  width=422 src="https://raw.githubusercontent.com/guilhermeforprojeto/clean_architecture/main/public/img/CleanArchitecture.jpg" ></img>
<div style="display: inline_block" align="center" >

<img   height="80"  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" />
<img height="70" width="70"  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" />

<img alt="Guilherme-Ts" height="60" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg"></img>
<img  height="60"  src="https://avatars.githubusercontent.com/u/20165699?s=200&v=4"></img><img height="60" width="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg" />

</div>

- Exemplo de arquitetura limpa seguindo os conceito do livro Clean Architecture do autor <a href="https://en.wikipedia.org/wiki/Robert_C._Martin"> Robert Cecil Martin.</a>
</p>

- Requisitos
- - <a href="https://nodejs.org/en/download/">Nodejs </a>
- - Conexão com internet

- Instalação[dentro do diretório via terminal]:
- - Copie/Baixe este respositorio GitHub para sua máquina.
- - Extecute `npm install` via terminal no diretório do projeto
- Execução desta aplicação [dentro do diretório via terminal]:
- - Colocar o Nest.js em execução execute no terminal: `npm run start:dev`
- - Com isso você terá o backend Nest Rodando e então podera acessar http://localhost:3000/ e ver a tela inicial, http://localhost:3000/route para visualizar as rotas e http://localhost:3000/routes para ver todas
- - Esse endpoint criado responde a `GET` e `POST` então podemos usar algumas ferramentas para ver ou incluir dados. Usamos aqui o <a href="https://github.com/guilhermeforprojeto/clean_architecture/blob/main/api.http"> ./api.http </a> que com a <a href="https://marketplace.visualstudio.com/items?itemName=humao.rest-client&ssr=false#overview"> extensão do VS code </a> que permite fazer `GET/POST` ao abrir o arquivo <a href="https://github.com/guilhermeforprojeto/clean_architecture/blob/main/api.http"> ./api.http </a> <p> Vemos aqui a baixo como fazer a requisição REST API </p><p> <img width="500"  src="https://raw.githubusercontent.com/guilhermeforprojeto/clean_architecture/main/public/img/api%20_http.jpeg" ></img></p>

<hr>

- Tecnologias usadas no projeto
- - NodeJS | TS | ExpressJS | NestJS | TypeORM
  </hr>

<h1 style="font-family: 'Sans';"> As 4 Camadas da Clean Architecture </h1>

<h3>Na Arquitetura limpa temos portas e adaptadores </h3>
<details>
EX: Neste projeto o /src/@core/infra/http/express/index.ts é o nosso adpatador e o src/application/...     são nossas portas.
<summary><a>Ler mais</a>
</summary>
<p>Padrões relacionados</p> 
<p>Adaptador:</p>
O livro ''Design Patterns'' contém uma descrição do padrão genérico ''Adapter'': "Converter a interface de uma classe em outra interface que os clientes esperam". O padrão de portas e adaptadores é um uso particular do padrão ''Adaptador''.
<p></p> 
Model-View-Controller:<p></p> (Controladora de visualização de modelo)
O padrão MVC foi implementado já em 1974 no projeto Smalltalk. Tem sido dado, ao longo dos anos, muitas variações, como Model-Interáctor e Model-View-Presenter. Cada um deles implementa a ideia de portas e adaptadores nas portas primárias, não nas portas secundárias.

<a href="https://alistair.cockburn.us/hexagonal-architecture/">Fonte</a>

</details>

![#](https://placehold.co/380x1/ffa500/ffa500.png)

## ENTITIES

- Regras de neǵocio consolidadas
- - Arquivo com a entidade <a href="https://github.com/guilhermeforprojeto/clean_architecture/blob/main/src/@core/domain/route.entity.ts"> `/src/@core/domain/route.entity.ts` </a><p> As as regras de negócio, validações</p>
- - - <a href="https://github.com/guilhermeforprojeto/clean_architecture/blob/main/src/@core/domain/route.entity.spec.ts"> `/src/@core/domain/route.entity.spec.ts` </a> <p>Todas regras devem ter testes unitários para ser seguro</p>

- Modelagem de dados

</p>
<br>
<hr>
<br>

![#](https://placehold.co/380x1/f87a58/f87a58.png)

## USE CASES

- Arquivo com caso de uso <a href="https://github.com/guilhermeforprojeto/clean_architecture/blob/main/src/@core/application/create_route.use_case.ts"> `/src/@core/application/create_route.use_case.ts` </a><p> O caso de uso, por exemplo os tipos de input e output, obriga informa a entrada de alguns dados cruciais para o funcionamento</p><p>`CreateRouteInput` nesta aplicação é a porta do caso de uso The Pattern: Ports and Adapters (‘’Object Structural’’) como diz no <a href="https://alistair.cockburn.us/hexagonal-architecture/">link.</a> Desta forma a `INFRA, PRESENTERS & REPOSITORIES` vai precisar se adpatar aos casos de uso e nunca o inverso. <p>Permitir que um aplicativo seja igualmente conduzido por usuários, programas, scripts automatizados de teste ou em lote, e seja desenvolvido e testado isoladamente de seus eventuais dispositivos e bancos de dados de tempo de execução.
<br>
<br>
<img width="190" src="https://alistair.cockburn.us/wp-content/uploads/2018/02/Hexagonal-architecture-pic-1-to-4-socket.jpg" ></img>
</p>
</p>
  <hr>
  <br>

![#](https://placehold.co/380x1/7ee23b/7ee23b.png)

## INFRA, PRESENTERS & REPOSITORIES

- Arquivo com a infra <a href="https://github.com/guilhermeforprojeto/clean_architecture/blob/main/src/@core/infra/http/express/index.ts"> `/src/@core/infra/http/express/index.ts` </a><p> A infra, aqui onde vamos usar para passar os dados da requisição da entidade usando os casos de uso</p><p>Utlizamos a extensão `REST Client ->/ @ext:humao.rest-client` para testar o POST na aplicação.</p>
- Expres.js
- - Framework Node, usado para habilitar uma aplicação web e usar a nossa aplicação.<p>Com ele fizemos `GET` & `POST` nas rotas. Arquivo com fontes <a href="https://github.com/guilhermeforprojeto/clean_architecture/blob/main/src/@core/infra/http/express/index.ts" >aqui</a>

</p>

- NestJS
- - NestJS é um framework Node.js destinado ao desenvolvimento de aplicativos do lado do servidor. NestJS faz uso do framework Express.js, sendo também compatível com o Fastify. Sua arquitetura é fortemente inspirada no Angular.

 <br>
    <hr>
    <br>

![#](https://placehold.co/380x1/c6e2ff/c6e2ff.png)

## UI, DB & WEB
