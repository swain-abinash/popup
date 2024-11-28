import {
  Card,
  CardContent,
  Typography,
  Box,
  Stack,
} from '@mui/material';
import { styled } from '@mui/system';
import ExploredButton from '../Button/ExploredButton';


// Main component
const ProfileCard = ({ data, onButtonClick }) => {
  return (
    <StyledBox>
      <StyledStack>
        {data.map((event) => (
          <StyledCard key={event.eventId}>
            <CardContent>
              <StyledTypography variant="h6">{event.title}</StyledTypography>
            </CardContent>
           {
             console.log(event)
           }
            
            <ExploredButton onButtonClick={onButtonClick} event={event}/>
          </StyledCard>
        ))}
      </StyledStack>
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
  '&:hover': {
    boxShadow: '0px 8px 12px rgba(0, 0, 0, 0.2)',
    transform: 'translateY(-5px)',
    transition: 'all 0.3s ease',
  },
  '@media (max-width: 768px)': {
    width: '180px',
    height: '180px',
  },
  '@media (max-width: 480px)': {
    width: '90%',
    height: 'auto',
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
export default ProfileCard;
