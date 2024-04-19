import {
  Box,
  Progress,
  Step,
  StepIcon,
  StepIndicator,
  StepStatus,
  Stepper,
} from '@chakra-ui/react';
import React from 'react';

export default function Steppers({quiz, activeStep, progressPercent}) {
  return (
    <Box position='relative'>
      <Stepper size='sm' index={activeStep} gap='0'>
        {quiz.map((step, index) => (
          <Step key={index} gap='0'>
            <StepIndicator bg='white'>
              <StepStatus complete={<StepIcon />} />
            </StepIndicator>
          </Step>
        ))}
      </Stepper>
      <Progress
        value={progressPercent}
        position='absolute'
        height='3px'
        width='full'
        top='10px'
        zIndex={-1}
      />
    </Box>
  );
}
