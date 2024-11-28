import {
  Typography,
} from '@mui/material';
import EventSection from './EventSection'
import ProfileCard from '../../components/card/ProfileCard'
import { RegesterEvents, ActiveEvents, CloseEvents } from '../../data/User'
import { styled } from '@mui/system';

const Common = () => {
  const data = ActiveEvents.map((val) => val);
  const data2 = CloseEvents.map((val) => val);
  const data3 = RegesterEvents.map((val) => val);
  const isRegisteredUser = true;

  return (
    <div>
    <EventSection />
    {isRegisteredUser && (
      <>
        <StyledHeading variant="h4">Register Events</StyledHeading>
        <ProfileCard data={data3} />
      </>
    )}
    <StyledHeading variant="h4">Active Events</StyledHeading>
    <ProfileCard data={data} />
    <StyledHeading variant="h4">Closed Events</StyledHeading>
    <ProfileCard data={data2} />
  </div>
  )
};

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
export default Common
