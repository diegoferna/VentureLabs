
import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://localhost:3000'
})

export const busca = async (setDados) => { 

    const resposta = await api.get('/users')

    

    setDados(resposta.data)
    console.log('estou chamando a api')
}