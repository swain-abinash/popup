import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Stack,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Slide,
} from '@mui/material';
import { styled } from '@mui/system';

// Sample event data 
const events = [
  {
    eventId: 1,
    title: 'Rural Banking India',
    description: 'An insightful discussion on the current state and future of rural banking in India, including the challenges and opportunities.',
  },
  {
    eventId: 2,
    title: 'Banking Vs Microfinance',
    description: 'Explore the differences between traditional banking and microfinance, and how each serves different sectors of the economy.',
  },
  {
    eventId: 3,
    title: 'Future Banking & AI',
    description: 'A forward-looking event covering the impact of artificial intelligence on the future of banking and financial services.',
  },
];

// Transition function for dialog
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

// Main component
const EventTopics = () => {
  const [open, setOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleOpen = (event) => {
    setSelectedEvent(event);
    setOpen(true);
  };

  // Function to close the dialog
  const handleClose = () => {
    setOpen(false);
    setSelectedEvent(null);
    document.getElementById('root').removeAttribute('aria-hidden');
    setTimeout(() => {
      document.getElementById('root').focus();
    }, 0);
  
  };

  return (
    <StyledBox>
      <StyledHeading variant="h4" component="h2">
        Event Topics
      </StyledHeading>
      <StyledStack>
        {events.map((event) => (
          <StyledCard key={event.eventId}>
            <CardContent>
              <StyledTypography variant="h6">{event.title}</StyledTypography>
            </CardContent>
            <ExploreButton variant="contained" onClick={() => handleOpen(event)}>
              Explore
            </ExploreButton>
          </StyledCard>
        ))}
      </StyledStack>

     <Dialog
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <DialogTitle id="dialog-title">{selectedEvent?.title}</DialogTitle>
        <DialogContent>
          <Typography id="dialog-description">
            {selectedEvent ? selectedEvent.description : 'Loading...'}
          </Typography>
        </DialogContent>
        <DialogActions>
          <CloseButton onClick={handleClose} color="primary">
            Close
          </CloseButton>
        </DialogActions>
      </Dialog> 
    </StyledBox>
  );
};

// Styled components
const StyledBox = styled(Box)({
  padding: '30px',
  '@media (max-width: 768px)': {
    padding: '20px',
  },
  '@media (max-width: 480px)': {
    padding: '10px',
  },
});

const StyledHeading = styled(Typography)({
  fontSize: '2rem',
  fontWeight: 'bold',
  textAlign: 'left',
  marginBottom: '16px',
  '@media (max-width: 768px)': {
    fontSize: '1.8rem',
    marginBottom: '12px',
  },
  '@media (max-width: 480px)': {
    fontSize: '1.5rem',
    marginBottom: '10px',
  },
});

const StyledStack = styled(Stack)({
  display: 'flex',
  flexDirection: 'row',
  gap: '32px',
  justifyContent: 'center',
  flexWrap: 'wrap',
  '@media (max-width: 768px)': {
    gap: '16px',
  },
  '@media (max-width: 480px)': {
    flexDirection: 'column',
    alignItems: 'center',
  },
});

const StyledCard = styled(Card)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '16px',
  backgroundColor: '#e0e0e0',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  borderRadius: '8px',
  width: '200px',
  height: '200px',
  '@media (max-width: 768px)': {
    width: '180px',
    height: '180px',
  },
  '@media (max-width: 480px)': {
    width: '90%',
    height: 'auto',
  },
});

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

const CloseButton = styled(Button)({
  backgroundColor: '#3b5998',
  color: '#ffffff',
  textTransform: 'none',
  fontWeight: 'bold',
  padding: '8px 16px',
  borderRadius: '8px',
  '&:hover': {
    backgroundColor: '#334d84', 
  },
  '&:focus': {
    outline: 'none', 
  },
});

const StyledTypography = styled(Typography)({
  fontWeight: 'bold',
  textAlign: 'center',
  marginTop: '40px',
  '@media (max-width: 768px)': {
    marginTop: '20px',
  },
  '@media (max-width: 480px)': {
    marginTop: '10px',
    fontSize: '1.2rem',
  },
});
export default EventTopics;
