
const useAuthSlice = (set,get)=>({
    user:null,
    loginError:null,
    login:(userData)=>set({user:userData,loginError:null}),
    logout:()=>set({user:null}),
    setLoginError:(error)=>set({loginError:error})

})

export default useAuthSlice