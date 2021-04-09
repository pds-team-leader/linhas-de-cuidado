# Linhas de Cuidado - Diabetes Mellitus e Hipertensão Arterial

## Descrição do ambiente
O ambiente de desenvolvimento do projeto é dividido em serviços operando em containers, orquestrados com Docker-Compose. Estes são:
#### DataBase
- PostgreSQL: Banco de dados relacional.
#### Back-end (/api)
- NodeJS: Interpretador de Javascript;
- Express, CORS: Bibliotecas para requisições HTTP;
- Knex: Biblioteca para gerenciamento de migrations e utilidades relacionadas ao DB.
#### Front-end (/app)
- NodeJS: Interpretador de Javascript;
- VueJS: Framework para desenvolvimento de interfaces;
- Axios: Biblioteca para integração com APIs.

## Instalação

### Requisitos
- Docker
- Docker-Compose

### Passo-a-Passo
- Faça o clone do repositório em um diretório na sua máquina
    - `git clone https://github.com/pds-team-leader/linhas-de-cuidado.git`
    - `cd linhas-de-cuidado`
    
- Adicione o repositório remoto aos seus remotes
    - `git remote add pds-ldc https://github.com/pds-team-leader/linhas-de-cuidado.git`
    
- Use o Docker para construir as imagens do ambiente
    - `docker-compose build`
    - `docker-compose up`
    
A princípio, os serviços de Front-End e Back-End serão entregues nas portas 
https://localhost:8080
e
https://localhost:3000, respectivamente.
