const { default: axios } = require("axios");

const apiMovie = axios.create({
    baseURL: 'https://api.disneyapi.dev',
    headers:{
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Mzk5MDk3ZmRmZDliZTQxMjhiYjFhNmMzYzc2MGVhMSIsIm5iZiI6MTcyNTU3ODIzMS43NzY4MDUsInN1YiI6IjY2ZDBmNzA1Yjc0ZjAzZDE4ZTcwNTMyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gLTR1jBPRMTjTpHsa2882ma6m1cfJMC3eLFm37CnDCc'
    }
})

export default apiMovie