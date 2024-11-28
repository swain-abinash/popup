import React from 'react';
import { Container} from '@mui/material';

import EventLanding from './Event/EventLanding';
import Common from './EventUser/Common';
// import DashBoard from './DashBoard/DashBoard';


const HomePage = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>

   {/* <Common/> */}
   <EventLanding />
   {/* <DashBoard/>   */}
    </Container>
  );
}; 

export default HomePage;
