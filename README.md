# NLW-SPACETIME 👨‍🚀

## Conteúdo
* [Sobre a aplicação](#sobre-a-aplicação)
* [Tecnologias](#hammer_and_wrench-tecnologias)
* [Iniciando a Aplicação](#car-Iniciando-a-aplicação)
* [Screenshots](#camera_flash-screenshots)
* [Contato](#email-contato)

## Sobre a aplicação
Aplicação desenvolvida durante o NLW Spacetime, promovido pela Rocketseat.<br />
Durante o evento, foram desenvolvidas 3 aplicações, uma API em Node, uma aplicação React com Next e um App em React Native. <br />
Infelizmente, não tive tempo de terminar a aplicação mobile, mas a API e a aplicação Web estão completas.<br />
A aplicação web permite cadastrar lembranças/memórias em uma timeline e possui autenticação pelo Github.<br />
<br />

## :hammer_and_wrench: Tecnologias
* Back-end
  * __Node__ + __Fastify__ + __Typescript__
  * __Prisma ORM__ com SQLite
  * Validação dos dados com __Zod__
* Front-end
  * __React__ + __Next__ + __Typescript__
  * __TailwindCSS__ para estilização
  * __Lucide-React__ para ícones
  * __JWT_Decode__ para obter o token
<br />

## :car: Iniciando a aplicação
Baixe o repositório com git clone e entre na pasta do projeto.
```bash
$ git clone https://github.com/luiizsilverio/nlw-spacetime
```
* Back-end
  * Renomeie o arquivo __.env.example__ para __.env__.
  * Informe o ClientID e o Client Secret.
```bash
$ cd server
$ npm install
$ npm run dev
```
* Front-end
  * Renomeie o arquivo __.env.local.example__ para __.env.local__.
  * Informe o ClientID.
```bash
$ cd ..
$ cd web
$ npm install
$ npm run dev
```

## :camera_flash: Screenshots
![](https://github.com/luiizsilverio/nlw-spacetime/blob/main/web/src/assets/nlw-spacetime.gif)


## :email: Contato

E-mail: [**luiiz.silverio@gmail.com**](mailto:luiiz.silverio@gmail.com)
