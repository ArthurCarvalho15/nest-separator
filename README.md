<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://nodejs.org/en" target="_blank"><img src="https://img.shields.io/badge/node_version-v20.5.0-green" alt="Node Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>


## Descrição

Separador de strings criado utilizando o framework [NestJS](https://github.com/nestjs/nest) para deploy no [AWS Lambda](https://docs.aws.amazon.com/pt_br/lambda/latest/dg/welcome.html).

Este repositório foi criado com o intuito de estudar o framework NestJS e o deploy de aplicações serverless no AWS Lambda, bem como a criação de testes unitários e e2e.

## Funcionalidades

- Separação de strings
  - O serviço recebe uma string com múltiplos caracteres e números aleatórios e retorna um objeto com dois Arrays de strings, um contendo apenas os caracteres e outro contendo apenas os números.

## Instalação

```bash
$ npm install
```

## Rodando a Aplicação

```bash
# lambda serveless offline
$ npm run lambda:dev

# deploy da lambda
$ npm run lambda:deploy
```

[!WARNING]
Para realizar o deploy da lambda é necessário configurar as credenciais da AWS utilizando o comando `aws configure` e informando o `Access Key ID`, `Secret Access Key` e `Default region name`.

## Endpoints

- `POST /separate`
  - Recebe uma string com múltiplos caracteres e números aleatórios e retorna um objeto com dois Arrays de strings, um contendo apenas os caracteres e outro contendo apenas os números.


__Endpoint Local:__
```bash 
curl --location 'http://localhost:3000/dev/separate' \
--header 'Content-Type: application/json' \
--data '{
    "data": "a465as1a1a6a4s4dsasfdsas24342sda7a9aasa"
}''
```
__Endpoint Lambda Ativo:__

```bash
curl --location 'https://jic5g9nyee.execute-api.us-east-1.amazonaws.com/dev/separate' \
--header 'Content-Type: application/json' \
--data '{
    "data": "a465as1a1a6a4s4dsasfdsas24342sda7a9aasa"
}'
```

__Resultado:__

```json
{
  "numbers": [
    4,
    6,
    5,
    1,
    1,
    6,
    4,
    4,
    2,
    4,
    3,
    4,
    2,
    7,
    9
  ],
  "letters": [
    "a",
    "a",
    "s",
    "a",
    "a",
    "a",
    "s",
    "d",
    "s",
    "a",
    "s",
    "f",
    "d",
    "s",
    "a",
    "s",
    "s",
    "d",
    "a",
    "a",
    "a",
    "a",
    "s",
    "a"
  ]
}
```

## Testes 

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Tecnologias
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg" width="30" alt="NestJS"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="30" alt="TypeScript"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" width="30" alt="Jest"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aws/aws-original.svg" width="30" alt="AWS Lambda"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" width="30" alt="npm"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" width="30" alt="Express"/>
