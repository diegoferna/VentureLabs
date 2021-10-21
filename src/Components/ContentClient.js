import React from 'react'
import { Box, createTheme } from '@mui/system'
import LeftBar from './LeftBar'
import { NewLetters } from './NewLetters'
import Search from './Search'
import RegisterContent from './Main/RegisterContent'
import ListarClient from './Main/ListarClient'





const ContentClient = () => {
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
                    <ListarClient />
                    <NewLetters/>
                </Box>
            </Box>
        </Box>
    )
}

export default ContentClient
