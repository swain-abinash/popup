import React from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/system';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ExploredButton = ({onButtonClick, event}) => {
  console.log("hello :",event);
  
  
  return (
    <ExploreButton variant="contained" endIcon={<ArrowForwardIcon />}  onClick={() => onButtonClick(event.eventId, event)}>
      Explore
    </ExploreButton>
  );
};

const ExploreButton = styled(Button)({
  backgroundColor: '#3b5998',
  color: '#ffffff',
  textTransform: 'none',
  fontWeight: 'bold',
  borderRadius: '10px',
  '&:hover': {
    backgroundColor: '#334d84',
  },
  '&:focus': {
    outline: 'none',
  },
});

export default ExploredButton;
