import React from 'react';
import { Box, Typography } from '@mui/material';
import styled from 'styled-components';

const steps = [
  { id: 1, title: "Step 1", description1: "xxxxxxxx", description2: "xxxxxxxxxxxxxx" },
  { id: 2, title: "Step 2", description1: "xxxxxxxx", description2: "xxxxxxxxxxxxxx" },
  { id: 3, title: "Step 3", description1: "xxxxxxxx", description2: "xxxxxxxxxxxxxx" },
  { id: 4, title: "Step 4", description1: "xxxxxxxx", description2: "xxxxxxxxxxxxxx" },
  ];

const Schedule = () => {
  return (
    <Container>
      <Title variant="h4">
        Schedule
      </Title>

      {steps.map((step, index) => (
        <StepBox key={step.id}>
          <StepContent>
            <StepButton>
              <Typography variant="caption" component="div">{step.title.split(" ")[0]}</Typography>
              <Typography variant="h6" component="div">{step.title.split(" ")[1]}</Typography>
            </StepButton>
            <Box sx={{ textAlign: 'left' }}>
              <Typography>{step.description1}</Typography>
              <Typography>{step.description2}</Typography>
            </Box>
          </StepContent>

          {index < steps.length - 1 && (
            <Box>
              <Arrow />
            </Box>
          )}
        </StepBox>
      ))}
    </Container>
  );
};

export default Schedule;

// Styled components

const Container = styled(Box)`
   margin-top: 50px;
`;

const Title = styled(Typography)`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 16px;
  text-align: left;
`;

const StepBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
`;

const StepContent = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const StepButton = styled(Box)`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background: linear-gradient(45deg, #ff4081 30%, #3f51b5 90%);
  color: white;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s;
  &:hover {
    background: linear-gradient(45deg, #ff4081 30%, #3f51b5 90%);
    color: white;
  }
`;

const Arrow = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  position: relative;
  left: -70px;
  
  &::before {
    content: "";
    width: 2px;
    height: 10px;
    position: absolute;
    background-color: white;
    padding-top: 30px;

  }
  &::after {
    content: "";
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 8px solid white;
    position: absolute;
    top: 40px;
 }
`;
