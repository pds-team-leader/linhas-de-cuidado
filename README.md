# Linhas de Cuidado - Diabetes Mellitus e Hipertensão Arterial

## Descrição do ambiente
O ambiente de desenvolvimento do projeto é dividido em serviços operando em containers, orquestrados com Docker-Compose. Estes são:
#### DataBase
- PostgreSQL: Banco de dados relacional.
#### Back-end (/api)
- NodeJS: Interpretador de Javascript;
- Express, CORS: Bibliotecas para requisições HTTP;
- Sequelize: Biblioteca para gerenciamento de migrations e utilidades relacionadas ao DB.
#### Front-end (/app)
- NodeJS: Interpretador de Javascript;
- VueJS: Framework para desenvolvimento de interfaces;
- Axios: Biblioteca para integração com APIs. 

## Instalação

#### Requisitos
- Docker
- Docker-Compose

#### Passo-a-Passo
- Faça um fork deste repositório (`pds-team-leader/linhas-de-cuidado`)
- Faça o clone do repositório `seu_usuario/linhas-de-cuidado` em um diretório na sua máquina:
    - `git clone https://github.com/SEU_USUARIO/linhas-de-cuidado.git`
    - `cd linhas-de-cuidado`
    
- Adicione o "repositório raiz" (pds-team-leader/linhas-de-cuidado) aos seus remotes:
    - `git remote add pds-ldc https://github.com/pds-team-leader/linhas-de-cuidado.git`
    
- Use o Docker para construir as imagens do ambiente:
    - `docker-compose build`
    - `docker-compose up`
    
A princípio, os serviços de Front-End e Back-End serão entregues nas portas 
http://localhost:8000
e
http://localhost:3000, respectivamente.

## Guia de Uso

#### Criando um CARD
- Para inserir um novo Card, certifique-se de estar *up to date* com a master e em seguida insira uma nova Branch correspondente ao seu Card.
    - `git fetch linhas-de-cuidado master`
    - `git checkout -b CARD-XX linhas-de-cuidado/master`

#### Criando um Épico
- Algumas tarefas podem ser grandes demais, ou ter dependencias entre setores diferentes, de forma que as entregas são dependentes entre si e, portanto, funcionam melhor agrupadas.
- A uma tarefa dessa proporção chamamos de Épico. Seus Cards se juntarão ao épico, que uma vez pronto, será incorporado na Master.
- Sendo assim, ao criar um novo Card para trabalhar, você o criará a partir do Card Épico, não da master, e ao entregá-lo pronto, você fará o merge em direção ao épico, não à Master.
    - `git fetch linhas-de-cuidado CARD-XX`
    - `git checkout -b CARD-XX linhas-de-cuidado/CARD-XX`

#### Fazendo um commit
- Para seus commits, tente seguir o padrão para evidenciar o CARD ao qual a sua adição se refere
    - `git commit -m "[CARD-XX] - Adiciona nova funcionalidade"`
- Em seguida, você realizará o *push* para seu repositório remoto (o *fork*)
    - `git push origin CARD-XX`

#### Pull Requests 
- Ao clonar o repositório Fork em sua máquina, o git criará automaticamente um *remote __origin__*, que aponta para o repositório *seu_usuario/linhas-de-cuidado*.
Esse é o repositório no qual você realizará seus *commits* e *pushes*:
    - `git push origin CARD-XXXX`
- Uma vez feito o *push* de um novo Card, você deverá criar uma **Pull Request** no Github. Vá para https://github.com/pds-team-leader/linhas-de-cuidado/pulls e clique em **"New Pull Request"**.
- O Github geralmente detecta mudanças no *repositório fork* que podem ser mescladas ao *repositório raíz*, nesses casos você verá algo como: 
![image](https://user-images.githubusercontent.com/81944783/114239086-9705b100-9953-11eb-9ac5-055858130dd5.png)
- Caso contrário, basta clicar em **"compare across forks"** e seguir com a definição da *Pull Request*.
- O exemplo da imagem acima é um caso excepcional em que se realiza o *merge* das branches **"main"** de cada repositório. Você **NÃO DEVE** fazer o *merge* com a main.
- Ao Criar um novo CARD ou Épico é criada uma branch equivalente no *repositório raíz*, você deve realizar o *merge* da branch de seu CARD no *repositório fork* para a branch equivalente no *repositório raíz*:
![image](https://user-images.githubusercontent.com/81944783/114239862-a0434d80-9954-11eb-9d8f-4ae5167b38d3.png)
- Antes mesmo de criar sua *Pull Request* e requisitar a avaliação de outros desenvolvedores, você pode fazer o *review* de seu próprio código e adicionar commits com correções, caso necessário. Feito isso, basta clicar em **"Create Pull Request"**.
- Você verá que já pode realizar o *merge*, no entanto, é recomendado que marque colegas e peça a avaliação de pelo menos 2 pessoas, que deverão aprovar a *PR*, antes de fazer o *merge*.
