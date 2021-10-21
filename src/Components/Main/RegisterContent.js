
import Box from '@mui/material/Box';
import React from 'react'
import RegisterForm from '../Form/RegisterForm';
import Typography from '@mui/material/Typography';
import '@fontsource/roboto/300.css';

const RegisterContent = () => {
    const [user, setUser] = React.useState({})

    function getDados (dados) {
        setUser(dados)
        fetch('http://localhost:3000/users', {
            method:'POST',
            headers:{
              'Content-Type':'application/json'
            },
            body: JSON.stringify({
              ...user
            })
          })
        
    }

    return (
        <Box sx={{
            display:'flex',
            flexDirection:'column',
            height: '600px',
            borderRadius:5,
            flexGrow: 1,
            bgcolor: 'background.paper',
            boxShadow: 2
        }}>
           
            <Typography 
                variant="h3"
                component="h1"
                align="center"
                mt="15px"
            >Cadastre-se</Typography>
            <RegisterForm send={getDados}/>
        </Box>
    )
}

export default RegisterContent
