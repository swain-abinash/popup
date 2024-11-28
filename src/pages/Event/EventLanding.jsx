import React,{useState} from 'react'
import { Typography } from '@mui/material';
import EventSection from './EventSection'
import  Schedule  from './Schedule'
import FAQSection from './FAQSection'
// import EventTopics from './EventTopics'
// import Chatbot from './Chatbot'
import { styled } from '@mui/system';
import ContactSection from '../../components/footer/ContactSection'
import ProfileCard from '../../components/card/ProfileCard';
import { Activity} from '../../data/User'
import Popup from '../../components/dailog/Popup'
const EventLanding = () => {
  const data = Activity.map((val) => val);
  const [userdetails, setUserdetails] = useState(null);
  const handleButtonClick = (action, user) => {
    console.log(user);
    
    if (action === 1) {
      setUserdetails(user);
    } else if (action === "navigate") {
      alert("navigate to new page!!");
    } else {
      alert("Unknown action");
    }
  };

  return (
   <>
    <EventSection/>
    <StyledHeading variant="h4" >
        Activity
      </StyledHeading>
      <ProfileCard data={data}  onButtonClick={(action, user) => handleButtonClick(action, user)}/>
    {/* <EventTopics/> */}
    <Schedule/>
    <Schedule/>
    <FAQSection/>
    {/* <Chatbot/> */}
    <ContactSection/>
    {/* User Details Section */}
    <Popup userdetails={userdetails} setUserdetails={setUserdetails} />
   </>
  )
}
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
export default EventLanding