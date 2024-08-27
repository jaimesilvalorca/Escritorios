import { ApiDesktop } from "./apiDesktop";

export const userLogin = async(loginData)=>{

try {
    const {data} = await ApiDesktop.post('api/usuarios/login',loginData)

    return data
    
} catch (error) {

    let err = error

    console.log(err.response.data.message)

    console.log("Error",JSON.stringify(err.response.data) )

    const apiError = JSON.parse(JSON.stringify(err.response.data))

    console.log(apiError)

    return Promise.resolve(apiError)
    
}
}