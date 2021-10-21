import React from 'react'
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

function AdressDate({send}){
    const [cep, setCep] = React.useState('')
    const [endereco1, setEndereco1] = React.useState('')
    const [endereco2, setEndereco2] = React.useState('')

    return(
        <Container component="article" maxWidth="sm">
            <form onSubmit={(event)=> {
                event.preventDefault();
                send({cep, endereco1, endereco2});
            }}>
                <TextField 
                    value={cep}
                    onChange={((event) => setCep(event.target.value))}
                    // onBlur={(event)=> {
                    //     setErros({emal:{valido:false, texto:'outro'}})
                    // }}

                    // error={!error.emal.valido}
                    // helperText={error.emal.texto}
                    required
                    id="cep" 
                    label="CEP" 
                    type="number"
                    margin="normal" 
                    fullWidth
                />
                <TextField 
                    value={endereco1}
                    onChange={((event) => setEndereco1(event.target.value))}

                    required
                    id="endereco1" 
                    label="Endereço 1"
                    margin="normal" 
                    fullWidth
                />
                <TextField 
                    value={endereco2}
                    onChange={((event) => setEndereco2(event.target.value))}

                    id="endereco2" 
                    label="Endereço 2" 
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

export default AdressDate;