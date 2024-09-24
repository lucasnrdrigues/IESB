const { default: axios } = require("axios");


const apiLocalidade = axios.create({
    baseURL: 'https://servicodados.ibge.gov.br/api/docs/localidades'
})

export default apiLocalidade