import axios from "axios";

// Vai receber o link do deploy do backend, ele acessa as informações, os dados 
const api = axios.create({
    baseURL: 'https://blogpessoal.onrender.com'
})

// Construindo uma exportação de função assíncrona que será responsável por cadastras um novo usuário dentro da aplicação
export const cadastrarUsuario = async (url: string, dados: object, setDados: Function) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
}

export const login = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
}