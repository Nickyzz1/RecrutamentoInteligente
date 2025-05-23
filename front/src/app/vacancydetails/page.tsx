"use client"

import { GoBack } from "@/components/goBack/page"
import { HeaderLogged } from "@/components/header2/page"
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';


import { Box, Button, ButtonGroup, StepContent, Typography } from "@mui/material";
import { useState } from "react";
const VacancyDetails : React.FC = () => {

    const steps = [
        {
            label :'Incrições',
            startDate : '12/05/25',
            endDate : '22/05/2025'
        },
        {
            label :'Incrições',
            startDate : '12/05/25',
            endDate : '22/05/2025'
        },
        {
            label :'Incrições',
            startDate : '12/05/25',
            endDate : '22/05/2025'
        },
        {
            label :'Incrições',
            startDate : '12/05/25',
            endDate : '22/05/2025'
        },
    ]

    const CustomStepIcon = (props : any) => {
        const { active, completed, className } = props;
      
        let color = '#B0BEC5'; // cor default
        if (active) color = '#036D3C';
        if (completed) color = '#339d6c';
      
        return (
          <div
            className={className}
            style={{
              color: "#f0f0f0",
              borderRadius: '50%',
              backgroundColor: color,
              width: 24,
              height: 24,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold'
            }}
          >
            ✓
          </div>
        );
      };
      

    const [activeStep, setActiveStep] = useState(2);

    return(
        <>
            <HeaderLogged/>
            <GoBack/>
            {/* Titlw od card */}
            <div className="flex flex-col w-screen min-h-screen overflow-hidden p-5 gap-5">
                <div className="flex flex-wrap flex-col bg-white border-1 rounded-2xl border-gray-200 p-7 gap-9">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-xl font-semibold">
                            Desenvolvedor React Senior
                        </h1>
                        <div className="flex flex-wrap ">
                            <CorporateFareIcon/>
                            <p className='font-xs text-gray-600'>Darede à nuvem</p>
                            <AddLocationIcon/>
                            <p className='font-xs text-gray-600'>Curitiba, PR</p>
                        </div>
                    </div>
                    <Button variant="contained" sx={{backgroundColor:'#036D3C', width:'100%'}}>Candidate-se</Button>
                </div>
                {/* detalhes da vaga */}
                <div className="flex flex-wrap flex-col bg-white border-1 rounded-2xl border-gray-200 p-7 gap-5">
                    <h1 className="text-xl font-semibold">Deatlhes da vaga</h1>
                    <ButtonGroup
                        variant="text"
                        aria-label="Basic button group"
                        sx={{
                            '& .MuiButtonGroup-grouped:not(:last-of-type)': {
                            borderRight: '1px solid #036D3C', // cor da linha vertical
                            },}}>
                        <Button sx={{ color: '#036D3C' }}>Descrição da vaga</Button>
                        <Button sx={{ color: '#036D3C' }}>Responsabilidades</Button>
                        <Button sx={{ color: '#036D3C' }}>Requisitos</Button>
                        <Button sx={{ color: '#036D3C' }}>Benefícios</Button>
                    </ButtonGroup>

                    <div className="bg-[#efffef] flex gap-4 rounded-r-sm">
                        <div className="bg-[#60a860] w-2"></div>
                        <p className="m-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo itaque quaerat iure nesciunt ex repudiandae alias, ab quas quae, eveniet quos sunt minus quo saepe, debitis cupiditate! Quo, voluptatibus ullam.</p>
                    </div>
                </div>
                {/* Etapas do  processo */}

                <div className="flex flex-wrap flex-col bg-white border-1 rounded-2xl border-gray-200 p-7 gap-9">
                    <h2 className="text-xl font-semibold">Detalhes da vaga</h2>

                    <div className="flex flex-wrap  rounded-xl">

                    <Stepper activeStep={activeStep} orientation="vertical">
                        {steps.map((step, index) => (
                            <Step key={index}>
                            <StepLabel
                                StepIconComponent={CustomStepIcon}
                                sx={{
                                '& .MuiStepLabel-label.Mui-active': { color: '#036D3C' },
                                '& .MuiStepLabel-label.Mui-completed': { color: '#339d6c' },
                                }}
                            >
                                {step.label}
                            </StepLabel>
                            <StepContent>
                                <Typography variant="caption"> {step.startDate} - {step.endDate}</Typography>
                                <Box sx={{ mb: 2, backgroundColor: '#036D3C' }}></Box>
                            </StepContent>
                            </Step>
                        ))}
                    </Stepper>

                    </div>

                </div>
                {/*Informações da vaga */}

            </div>
        </>
    )
}

export default VacancyDetails;