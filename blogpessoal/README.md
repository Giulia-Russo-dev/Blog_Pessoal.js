# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.

Axios --

HTTP: verbos - GET, POST, PUT e DELETE.
Promises - utiliza funções assíncronas.
Funções assíncronas -> permitem que tarefas mais demoradas, como requisições HTTP ou acesso ao banco de dados, sejam executadas em segundo plano.
Promises -> É um objeto que representa o resultado futuro de umna operação assíncrona.
Estados de Promises:
pending (pendente) --> estado inicial, aguasrdando resolução;
fulfilled (resolvida) --> opeação concluída com sucesso;
rejected (rejeitada) --> operação falhou; 

Sintexe:
new Promise (resolve, reject) => {
  // lógica da operação assíncrona
};

Async/Await

async: define uma função como assíncrona, permitindo o uso do await dentro dela.
await: pausa de execução da função até que Promise seja resolvida ou rejeitada, retornando o resultado diretamente.

Biblioteca AXIOS: é uma biblioteca javascript de comunicação HTTP, baseada em Promises, que permite que desenvolvedores façam requisições para a sua própria API (Backend da aplicação) ou para APIs de terceiros.

Como funciona o Axios?

URL: endereço do endpoint que será consumido.
Método HTTP: GET, POST, PUT e DELETE.
Cabeçalhos (Headers): por exemplo TOKEN JWT.
Corpo da requisição (BODY): dados que serão enviados, se necessário.

Enviar requisição: 
Node.js usando a biblioteca interna HTTP
Navegador: API-XMLHttpRequest

Métodos do Axios

axios.get(url,options)
axios.post(url,data,options)

Consumo com Axios

import axios from "axios"
async function carregarPost(){
  try{
    const resposta = await axios.get(""https://jsonplaceholder.typicode.com/posts");
    console.log(resposta.data);
  }catch(erro){
    console.error(erro);
  }
}

Interfaces Model

Model: são arquivos typeScript que definem o Modelo de Dados.
Service: são scripts TypeScript compostos por funções assíncronas.
Gerenciamento de Estado Global: processo de controlar e compartilhar estados (dados) que precisam ser acessados ou modificados por vários componentes da apliacação.
