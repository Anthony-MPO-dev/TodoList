# Todo List

Este é um site de teste criado para simular com react e postgres uma lista de afazeres para gerenciar suas tarefas diárias.

## Inicialização do Backend

1. Certifique-se de ter o Node.js instalado em sua máquina. Você pode baixá-lo em [nodejs.org](https://nodejs.org/).
2. Abra o terminal e navegue até a pasta do backend do seu projeto.
3. Instale as dependências usando o seguinte comando:
   ```bash
   npm install
   ```
4. Certifique-se de ter o Docker e o Docker Compose instalados em sua máquina. Você pode baixá-los em docker.com.
5. Abra o terminal dentro da pasta backend onde esta localizado o arquivo docker-compose.yml.
6. Execute o seguinte comando para iniciar o contêiner do PostgreSQL:
    ```bash
    docker-compose up -d
    ```
7. Aguarde até que o contêiner do PostgreSQL seja iniciado. Você pode verificar o status do contêiner usando o seguinte comando:
    ```bash
    docker-compose ps
    ```
8. Após o contêiner estar em execução, o PostgreSQL estará disponível em localhost:5432 com as credenciais definidas no arquivo docker-compose.yml.

9. Após a instalação das dependências e inicio do container postgres, inicie o servidor backend com o seguinte comando:
    ```bash
    npm run dev
    ```

10. O servidor backend será iniciado e estará disponível em http://localhost:3333.

## Inicialização do Frontend

1. Certifique-se de ter o Node.js instalado em sua máquina. Você pode baixá-lo em nodejs.org.
2. Abra outro terminal e navegue até a pasta do todo-site do seu projeto.
3. Instale as dependências usando o seguinte comando:
   ```bash
   npm install
   ```
4. Após a instalação das dependências, inicie o servidor frontend com o seguinte comando:
    ```bash
    npm start
    ```
5. O servidor frontend será iniciado e abrirá automaticamente em seu navegador padrão em http://localhost:3000.


## Fonte acesse:
 Link: https://www.youtube.com/watch?v=qbQ8wzJ6DrQ&list=LL&index=5
