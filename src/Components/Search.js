import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react';
import styled from 'styled-components'

const Input = styled.input `
    width: 50%;
    height: 50px;
    border:none;
    border-radius: 40px;
    color: whitesmoke;
    text-align: center;
    font-size: 1.5rem;
`

const Search = () => {
    return (
        <Box sx={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            height: '80px',
            border: '1 px solid grey.300',
            ml:2,
            mr:2,
            flexGrow: 1,
            bgcolor: 'background.paper',
            boxShadow: 1
        }}>
            <Input placeholder="buscar clientes" />
        </Box>
    )
}

export default Search
