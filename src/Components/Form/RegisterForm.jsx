import { Container, Step, StepLabel, Stepper } from '@material-ui/core';
import { Typography } from '@mui/material';
import React from 'react'
import AdressDate from './AdressDate';
import DocDate from './DocDate';
import PersonDate from './PersonDate';


function RegisterForm({send}) {
  
    const [current, setCurrent] = React.useState(0)
    const [dadosColetados, setDados] = React.useState({})
    

    React.useEffect(()=>{
        if(current == forms.length-1){
            send(dadosColetados)
        }
    })

    const forms = [
        <PersonDate send={allData}/>,
        <AdressDate send={allData} />,
        <DocDate send={allData}/>,
        <Typography sx={{
            textAlign:'center',
            mt:'100px'

        }}>Obrigado peelo Cadastro!</Typography>
    ]

    function allData(dados) {
        setDados({...dadosColetados, ...dados})
        next()
        
    }

    function next() {
        setCurrent(current + 1)
    }

    return (
    <>
        <Container component="article" maxWidth="sm">
            <Stepper activeStep={current}>
                <Step><StepLabel>Pessoal</StepLabel></Step>
                <Step><StepLabel>Endereço</StepLabel></Step>
                <Step><StepLabel>Nascimento</StepLabel></Step>
                <Step><StepLabel>Finalização</StepLabel></Step>
            </Stepper>
        </Container>
        { forms[current]}
    </> )
}

export default RegisterForm;