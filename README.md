# Linhas de Cuidado - Diabetes Mellitus e Hipertensão Arterial

## Instalação

### Requisitos
- Docker
- Docker-Compose

### Passo-a-Passo
- Faça o clone do repositório em um diretório na sua máquina
    ```git clone https://github.com/pds-team-leader/linhas-de-cuidado.git```
    ``cd linhas-de-cuidado``
    
- Adicione o repositório remoto aos seus remotes
    ```git remote add pds-ldc https://github.com/pds-team-leader/linhas-de-cuidado.git```
    
- Use o Docker para construir as imagens do ambiente
    ```docker-compose build```
    ```docker-compose up```
    
A princípio, os serviços de Front-End e Back-End serão entregues nas portas 
```https://localhost:8080```
e
```https://localhost:3000```, respectivamente
