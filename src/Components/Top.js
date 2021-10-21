import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const Top = () => {
    return (
       <Box sx={{
           display: 'flex',
           width:'100%',
           height: '80px',
           bgcolor: 'background.paper',
           boxShadow: 2
           
        }}>
            <Box sx={{

                display:'flex',
                alignItems:'center'
            }}>
                <Link to="/" sx={{textDecoration:'none'}}>
                    <Typography
                        variant="h3"
                        component="h2"
                        align="center"
                        sx={{
                            color:'blue',
                            ml:2,
                            '&:hover':{
                                color:'red'
                            }
                        }}
                    >VentureLabs</Typography>
                </Link>
            </Box>
       </Box>
    )
}

export default Top

