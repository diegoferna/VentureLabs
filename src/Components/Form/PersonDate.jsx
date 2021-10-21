import React from 'react'
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

function PersonDate({send}) {
    const [nome, setNome] = React.useState("");
    const [sobrenome, setSobrenome] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [telefone, setTelefone] = React.useState("");
    const [error, setErros] = React.useState({
        emal:{
            valido:true,
            texto:""
        }
    })

    function validaEmail() {

    }

    function validaTelefone() {
        
    }

    return(
        <Container component="article" maxWidth="sm">
            <form onSubmit={(event)=> {
                event.preventDefault();
                send({nome, sobrenome, email, telefone});
            }}>
                <TextField 
                    value={nome}
                    onChange={((event) => setNome(event.target.value))}

                    required
                    id="nome" 
                    label="Nome" 
                    margin="normal" 
                    fullWidth
                />
                <TextField 
                    value={sobrenome}
                    onChange={((event) => setSobrenome(event.target.value))}

                    required
                    id="sobrenome" 
                    label="Sobrenome" 
                    margin="normal" 
                    fullWidth
                />
                <TextField 
                    value={email}
                    onChange={((event) => setEmail(event.target.value))}
                    onBlur={(event)=> {
                        setErros({emal:{valido:false, texto:'outro'}})
                    }}

                    required
                    error={!error.emal.valido}
                    helperText={error.emal.texto}
                    id="email" 
                    label="Email" 
                    type="email"
                    margin="normal" 
                    fullWidth
                />
                <TextField 
                    value={telefone}
                    onChange={((event) => setTelefone(event.target.value))}

                    required
                    helperText="Padrão (xx) xxxxx-xxxx"
                    id="telefone" 
                    label="Telefone" 
                    type="tel"
                    margin="normal" 
                    fullWidth
                />
                <Box sx={{
                    display:'flex',
                    flexDirection:'row',
                    justifyContent:'end',
                    mt:1
                }}>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        align="right"
                        sx={{width:'25%'}}
                    >PRÓXIMO</Button>
                </Box>
            </form>
        </Container>
    )
}

export default PersonDate;