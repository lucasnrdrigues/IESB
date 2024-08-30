const { default: axios } = require("axios");

const apiDisney = axios.create({
    baseURL: 'https://api.disneyapi.dev/' //Peguei do site da Disney
})

export default apiDisney