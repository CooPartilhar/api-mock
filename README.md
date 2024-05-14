# Mock server API Coopartilhar

Este projeto tem por objetivo contemplar os contratos de API e mocks para o desenvolvimento da API do aplicativo [Coopartilhar]( https://github.com/Flutterando/calamidade](https://github.com/Flutterando/calamidade-backend ).

# Execução do projeto e testes

1. Instale o [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).
2. execute o comando `npm install`.
3. Após a instalação, execute o comando `node resource-parser.js`, este comando irá realizar a varredura da pasta `./resources` e irá criar o arquivo `db.json`, que simulará a API.
    - **OBS:** Cada novo resource/contrato que você criar deve ser inserido seguindo o modelo do arquivo `users.json` como exemplo.
5. para executar o projeto, execute o comando `npx json-server db.json`, por padrão o projeto é executado na porta 3000, mas caso você deseje, após a indicação do arquivo informe a opção `-p ` passando a porta desejada em seguida.

# Definição de contratos de API

Para solicitar um contrato de API, realize a abertura de um Pull request de acordo com as instruções de contribuição da mesma forma que é relizado no [repositório back-end]( https://github.com/Flutterando/calamidade](https://github.com/Flutterando/calamidade-backend# ). Contratos que tiverem aprovação serão desenvolvidos na API.
