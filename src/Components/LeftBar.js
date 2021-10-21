import Box from '@mui/material/Box';
import React from 'react';
import { Link } from 'react-router-dom';
import SvgIcon from '@mui/material/SvgIcon';
import PeopleIcon from '@mui/icons-material/People';
import GroupAddIcon from '@mui/icons-material/GroupAdd';

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}


const LeftBar = () => {
    return (
        <Box sx={{
            display: 'flex',
            width: '12%',
            p:2,
            mt:2,
            borderRadius:5,
            height: '20%',
            bgcolor: 'background.paper',
            boxShadow: 2
        }}>
        <Box sx={{width: '100%'}}>
            <Link to="/">
                    <Box sx={{
                        width:'100%',
                        height: '35px',
                        display:'flex',
                        alignItems:'center',
                        justifyContent:'space-between',
                        p:0,
                        mb:1,
                        '&:hover':{
                            bgcolor:'#e3f2fd',
                            borderRadius:'20px',
                            border:'5px solid e3f2fd '
                        }

                    }}>
                        <Box sx={{
                            flexGrow:1,
                            width:'13px',
                            display:'flex',
                            justifyContent:'center',
                        }}>
                            <HomeIcon color="primary"/>
                        </Box>
                        <Box sx={{flexGrow:2}}>
                            <li style={{marginRight:'20px'}}>Home</li>
                        </Box>
                    </Box>
                </Link>
                <Link to="cadastro">
                <Box sx={{
                        width:'100%',
                        height: '35px',
                        display:'flex',
                        alignItems:'center',
                        justifyContent:'space-between',
                        p:0,
                        mb:1,
                        '&:hover':{
                            bgcolor:'#e3f2fd',
                            borderRadius:'20px',
                        }
                    }}>
                        <Box sx={{
                            display:'flex',
                            justifyContent:'center',
                            flexGrow:1,
                            width:'4px'
                        }}>
                            <GroupAddIcon color="primary"/>
                        </Box>
                        <Box sx={{flexGrow:1,}}>
                            <li style={{marginRight:'20px'}}>Cadastrar</li>
                        </Box>
                    </Box>
                </Link>
                <Link to="clientes">
                <Box sx={{
                        width:'100%',
                        height: '35px',
                        display:'flex',
                        alignItems:'center',
                        justifyContent:'space-between',
                        p:0,
                        mb:1,
                        '&:hover':{
                            bgcolor:'#e3f2fd',
                            borderRadius:'20px',
                        }

                    }}>
                        <Box sx={{
                            display:'flex',
                            justifyContent:'center',
                            flexGrow:1, 
                            width:'0px'
                        }}>
                            <PeopleIcon color="primary"/>
                        </Box>
                        <Box sx={{flexGrow:1}}>
                            <li style={{marginRight:'20px'}}>Clientes</li>
                        </Box>
                    </Box>
                </Link>
            </Box>
        </Box>
    )
}

export default LeftBar
