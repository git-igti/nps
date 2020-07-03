<h5 align="center"><img width="150px" src="./src/assets/logo-green.png"></h5>

<h2 align="center">API de Pesquisa NPS</h2>


<br>

#### :pencil: Implementação:
API construida em `Typescript` com conexão ao Banco `Postgres` e dockeirizada em uma imagem totalmente efêmera, criada para receber os dados sensiveis em sua instância.
API foi para produção, executando em um servidor apache com certificado SSL que faz o proxy para a porta do `Docker`.
<br>

### Inciando


Faça download do arquivo "Dockerfile" disponível neste repositório. Em seguida, execute os comandos abaixos no diretório do arquivo baixado.




#### 1 - Build da imagem

``` js
docker image build --build-arg POSTGRES_PASSWORD=senha --build-arg POSTGRES_USER=user --build-arg POSTGRES_HOST=host -t igti/nodeapi .
```

#### 2 - Iniciando aplicação

``` js
docker container run -p 3333:3333 -d igti/nodeapi:latest
```

#### 3 - Para visualizar os logs

``` js
docker logs igti/nodeapi
```
<br>
<div align="center">
  <sub>Built with ❤︎ by <a href="https://github.com/igorryan">Igor Ryan</a>
</div>

[typescript-image]: https://img.shields.io/badge/Typescript-294E80.svg?style=for-the-badge&logo=typescript

[license-url]: LICENSE.md
[license-image]: https://img.shields.io/github/license/adonisjs/adonis-framework?style=for-the-badge
