import { Box, Button, Container, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { userLogin } from '../api/AuthServices'
import { useNavigate } from 'react-router-dom'
import Message from '../components/Message'
import useStore from '../store/store'


const Login = () => {

    const [signin, setSignin] = useState({
        correo:'',
        clave:''
    })

    const navigate = useNavigate()

    const login = useStore((state)=>state.login)

    const [error, setError] = useState('')

    const handleChange = (e) =>{
        setSignin({
            ...signin,
            [e.target.name]:e.target.value

        })

    }

    const handleSubmit = async  (e)=>{
        try {
            e.preventDefault()
            const response = await userLogin(signin)

            if(!response.success){

                return setError(response.message)
            }
            setError('')

            login(response.data)
            navigate('/')
            
            
        } catch (error) {
            
           console.log(error)
            
        }

    }



  return (
    <Container component="main" maxWidth="xs">

      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        
        <Typography component="h1" variant="h5">
          Iniciar sesión
        </Typography>

        <Box
        
          component="form"
          noValidate
          onSubmit={handleSubmit}
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="correo"
            label="Correo electrónico"
            name="correo"
            autoComplete="correo"
            autoFocus
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="clave"
            label="Contraseña"
            type="clave"
            id="clave"
            autoComplete="current-clave"
            onChange={handleChange}
          />
                  {
            error ? <Message color='error' message={error} /> : ''
        }
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}

          >
            Iniciar sesión
          </Button>
          
        </Box>
      </Box>
    </Container>
  )
}

export default Login