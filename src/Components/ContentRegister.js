import React from 'react'
import { Box, createTheme } from '@mui/system'
import LeftBar from './LeftBar'
import { NewLetters } from './NewLetters'
import Search from './Search'
import RegisterContent from './Main/RegisterContent'





const ContentRegister = () => {
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
                        
                       <RegisterContent/>
                    </Box>
                    <NewLetters/>
                </Box>
            </Box>
        </Box>
    )
}

export default ContentRegister
