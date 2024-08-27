import axios from "axios"

const ApiDesktop = axios.create({
    baseURL:'http://172.17.250.34:3000/',
    headers:{
        'Content-Type':'application/json'
    }
})



export{ApiDesktop}