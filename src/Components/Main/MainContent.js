
import Box from '@mui/material/Box';
import React from 'react'
import RegisterForm from '../Form/RegisterForm';
import Typography from '@mui/material/Typography';
import '@fontsource/roboto/300.css';
import People from './../../Assets/people.png'
import StandardImageList from '../../Img/StandardImageList';




const MainContent = () => {

    return (
        <Box sx={{
            display: 'flex',
            flexDirection:'column',
            justifyContent: 'space-between',
            height: '500px',
            borderRadius:5,
            m:2,
            flexGrow: 1,
            bgcolor: 'background.paper',
            boxShadow: 2
        }}>
           
            <Typography 
                variant="h3"
                component="h1"
                align="center"
                mt="15px"
            >Bem - Vindo</Typography>
            
            <Box sx={{
                display:'flex',
                flexDirection:'column',
                alignItems:'center',
                justifyContent:'end'
            }}>
                <img width={'600px'} src={People}/>
            </Box>
        </Box>
    )
}

export default MainContent
