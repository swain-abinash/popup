import React, { useState, useEffect } from 'react';
import { Button, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';

// Mock data array
const events = [
  { id: 0, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxUqALYSo5teH1qWbyTlJQSWLOPUIu1_FnJPpsFX3xcCfYpwmPNRp-IhlzzTM94hdDQio&usqp=CAU', name: 'Event 1' },
  { id: 1, image: 'https://via.placeholder.com/1200x800/448aff/ffffff?text=Event+2', name: 'Event 2' },
  { id: 2, image: 'https://via.placeholder.com/1200x800/ffeb3b/000000?text=Event+3', name: 'Event 3' },
]; 

const EventSection = () => {
  const [currentId, setCurrentId] = useState(0); // State to track current event ID

  const currentEvent = events.find((event) => event.id === currentId);

  useEffect(() => {
    // Set up interval to change event ID every 3 seconds
    const interval = setInterval(() => {
      setCurrentId((prevId) => (prevId + 1) % events.length); // Cycle through events
    }, 3000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <BackgroundImage src={currentEvent.image} alt="Event Background" />
      <ContentContainer>
        <EventName>{currentEvent.name}</EventName>
      </ContentContainer>
      <StyledButton>Register</StyledButton>
    </Container>
  );
};

export default EventSection;


const Container = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '70vh',
  position: 'relative',
  overflow: 'hidden',
  '@media (max-width: 480px)': { // Mobile
    height: '50vh',
  },
  '@media (min-width: 768px)': { // Tablet
    height: '60vh',
  },
  '@media (min-width: 1024px)': { // Laptop
    height: '70vh',
  },
});

const BackgroundImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: -1,
  '@media (max-width: 480px)': { // Mobile
    objectPosition: 'center', // Center image on mobile for better fit
  },
  '@media (min-width: 768px)': { // Tablet
    objectPosition: 'top',
  },
  '@media (min-width: 1024px)': { // Laptop
    objectPosition: 'center', // Center it back for larger screens
  },
});

const ContentContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1,
  padding: '0 16px',
  '@media (max-width: 480px)': { // Mobile
    padding: '0 12px',
  },
  '@media (min-width: 768px)': { // Tablet
    padding: '0 32px',
  },
  '@media (min-width: 1024px)': { // Laptop
    padding: '0 48px',
  },
});

const EventName = styled(Typography)({
  fontSize: '24px',
  fontWeight: 'bold',
  marginBottom: '20px',
  color: '#fff',
  textAlign: 'center',
  letterSpacing: '2px',
  textShadow: '2px 2px 8px rgba(0, 0, 0, 0.6)',
  padding: '0 16px',
  '&::first-letter': {
    textTransform: 'uppercase',
  },
  '@media (max-width: 480px)': { // Mobile
    fontSize: '20px',
    marginBottom: '16px',
  },
  '@media (min-width: 768px)': { // Tablet
    fontSize: '28px',
  },
  '@media (min-width: 1024px)': { // Laptop
    fontSize: '32px',
  },
});

const StyledButton = styled(Button)({
  color: 'white',
  padding: '8px 20px',
  fontSize: '14px',
  textTransform: 'none',
  borderRadius: '10px',
  background: 'linear-gradient(135deg, #ff4081, #448aff)',
  boxShadow: '15px 15px 12px #7d7d7d, -15px -15px 12px #ffffff',
  transition: 'box-shadow 0.3s ease, transform 0.3s ease',
  '&:hover': {
    border: 'none',
    transform: 'scale(1.05)',
    boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.2)',
  },
  '&:focus': {
    outline: 'none', 
  },
  '@media (max-width: 480px)': { // Mobile
    padding: '6px 16px',
    fontSize: '12px',
  },
  '@media (min-width: 768px)': { // Tablet
    padding: '10px 24px',
    fontSize: '16px',
  },
  '@media (min-width: 1024px)': { // Laptop
    padding: '12px 28px',
    fontSize: '18px',
  },
});