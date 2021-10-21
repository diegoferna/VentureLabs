import React from 'react'
import { Box, createTheme } from '@mui/system'
import Top from './Top'
import LeftBar from './LeftBar'
import MainContent from './Main/MainContent'
import { NewLetters } from './NewLetters'
import Search from './Search'




const Content = () => {
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
                        
                        <MainContent/>
                    </Box>
                    <NewLetters/>
                </Box>
            </Box>
        </Box>
    )
}

export default Content
