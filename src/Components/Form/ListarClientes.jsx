import React from 'react'
import { Box, createTheme } from '@mui/system'
import LeftBar from '../LeftBar'
import { NewLetters } from '../NewLetters'
import Search from '../Search'
import RegisterContent from '../Main/RegisterContent'
import { busca } from '../Api/api'




const ListarClientes = () => {

    const [posts, setPosts] = React.useState([])

    

    return (
      <div>{posts.nome}</div>
    )
}

export default ListarClientes
