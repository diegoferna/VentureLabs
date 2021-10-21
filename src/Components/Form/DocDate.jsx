import React from 'react'
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

function DocDate({send}){
    const [dtnascimento, setDtnascimento] = React.useState('')
    const [cpf, setCpf] = React.useState('')
    const [renda, setRenda] = React.useState('')

    

    return(
        <Container component="article" maxWidth="sm">
            <form onSubmit={(event)=> {
                event.preventDefault();
                send({dtnascimento, cpf, renda});
            }}>
                <TextField 
                    value={dtnascimento}
                    onChange={((event) => setDtnascimento(event.target.value))}
                    // onBlur={(event)=> {
                    //     setErros({emal:{valido:false, texto:'outro'}})
                    // }}

                    // error={!error.emal.valido}
                    // helperText={error.emal.texto}
                    required
                    id="dtnascimento" 
                    type="date"
                    margin="normal" 
                    fullWidth
                />
                <TextField 
                    value={cpf}
                    onChange={((event) => setCpf(event.target.value))}

                    required
                    id="cpf" 
                    label="CPF" 
                    type="number"
                    margin="normal" 
                    fullWidth
                />
                <TextField 
                    value={renda}
                    onChange={((event) => setRenda(event.target.value))}

                    required
                    id="renda" 
                    label="Renda Mensal" 
                    type="number"
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
                    >SALVAR</Button>
                </Box>
            </form>
        </Container>

    )
}

export default DocDate;