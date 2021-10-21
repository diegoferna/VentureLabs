
import Box from '@mui/material/Box';
import React, { useEffect, useState } from 'react'
import RegisterForm from '../Form/RegisterForm';
import Typography from '@mui/material/Typography';
import '@fontsource/roboto/300.css';
import ListarClientes from '../Form/ListarClientes';
import { busca } from '../Api/api';
import LeftBar from '../LeftBar';
import { NewLetters } from '../NewLetters';
import { Container, List } from '@mui/material';

const ListarClient = ({url}) => {
    const [dados, setDados] = React.useState([])

    useEffect(()=> { 
        busca(setDados)
        console.log(dados)
    },[])
    
    return (
        <Box sx={{
            width:'100%',
            display:'flex',
            flexDirection:'column',
            alignItems:'center'
        }}>
            <Box sx={{
            display: 'flex',
            alignItems:'center',
            flexDirection:'column',
            width: '70%',
            height: '600px',
            }}>
                
                <Box sx={{
                    width: '100%',
                    display: 'flex',
                    alignItems:'start',
                    flexDirection:'row',
                }}>
                    
                    <LeftBar />
                    <Box sx={{
                        height: '600px',
                        borderRadius:5,
                        m:2,
                        flexGrow: 1,
                        bgcolor: 'background.paper',
                        boxShadow: 2
                    }}>
                        <Container component="article" maxWidth="sm">
                            {
                                dados.map((dado) => (
                                   <section   id='clientes'>
                                       <Box key={dado.id} sx={{
                                            width: '100%',
                                            display: 'flex',
                                            justifyContent:'center',
                                            height: '50px',
                                            alignItems:'center',
                                            flexDirection:'column',
                                            bgcolor:'#f3f2ef',
                                            mt:5,
                                            cursor:'pointer',
                                            textTransform:'uppercase'
                                        }}>
                                           <p>{dado.nome +' '+dado.sobrenome}</p>
                                           <p>{dado.email}</p>
                                       </Box>
                                   </section>
                                ))
                            }
                        </Container>
                    </Box>
                    <NewLetters/>
                </Box>
            </Box>
        </Box>
    )
}

export default ListarClient
