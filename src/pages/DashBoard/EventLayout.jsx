// import React from 'react';
// import { Card, CardContent, Typography, Grid, Box } from '@mui/material';
// import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
// import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

// const EventLayout = () => {
//     return (
//         <Box sx={{ paddingTop: '250px' }}>
//             <Grid container spacing={10} justifyContent="center" alignItems="center">
//                 {/* Left Column */}
//                 <Grid item xs={4} container direction="column" alignItems="center">
//                     <Card sx={{ width: '300px', height: '200px', backgroundColor: '#d0d0d0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}> {/* Center content */}
//                         <CardContent sx={{ textAlign: 'center' }}> {/* Center content inside */}
//                             <Typography variant="h6">Rural Banking India</Typography>
//                         </CardContent>
//                     </Card>
//                     <ArrowDownwardIcon sx={{ color: 'green' }} />
//                     <Card sx={{ width: '300px', backgroundColor: '#d0d0d0' }}>
//                         <CardContent>
//                             <Typography variant="body1" align="center">Article published</Typography>
//                         </CardContent>
//                     </Card>
//                 </Grid>

//                 {/* Middle Column */}
//                 <Grid item xs={4} container direction="column" alignItems="center">
//                     <Card sx={{ width: '300px', backgroundColor: '#d0d0d0' }}>
//                         <CardContent>
//                             <Typography variant="body1" align="center">Article published</Typography>
//                         </CardContent>
//                     </Card>
//                     <ArrowUpwardIcon sx={{ color: 'blue' }} />
//                     <Card sx={{ width: '300px', height: '200px', backgroundColor: '#d0d0d0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//                         <CardContent sx={{ textAlign: 'center' }}>
//                             <Typography variant="h6" align="center">Banking Vs Microfinance</Typography>
//                         </CardContent>
//                     </Card>
//                 </Grid>

//                 {/* Right Column */}
//                 <Grid item xs={4} container direction="column" alignItems="center">
//                     <Card  sx={{ width: '300px', height: '200px', backgroundColor: '#d0d0d0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//                         <CardContent sx={{ textAlign: 'center' }}>
//                             <Typography variant="h6" align="center">Future Banking & AI</Typography>
//                         </CardContent>
//                     </Card>
//                     <ArrowDownwardIcon sx={{ color: 'orange' }} />
//                     <Card sx={{ width: '300px', backgroundColor: '#d0d0d0' }}>
//                         <CardContent>
//                             <Typography variant="body1" align="center">Article published</Typography>
//                         </CardContent>
//                     </Card>
//                 </Grid>
//             </Grid>
//         </Box>
//     );
// };

// export default EventLayout;
import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import styled from 'styled-components';

// Styled components
const StyledBox = styled(Box)`
  padding-top: 50px;
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
`;

const StyledColumn = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 320px;
  margin: 10px;
`;

const StyledCard = styled(Card)`
  width: 300px;
  background-color: #d0d0d0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`;

const StyledCardContent = styled(CardContent)`
  text-align: center;
`;

const StyledArrowDownward = styled(ArrowDownwardIcon)`
  color: green;
`;

const StyledArrowUpward = styled(ArrowUpwardIcon)`
  color: blue;
`;

const EventLayout = () => {
  return (
    <StyledBox>
      {/* Left Column */}
      <StyledColumn>
        <StyledCard>
          <StyledCardContent>
            <Typography variant="h6">Rural Banking India</Typography>
          </StyledCardContent>
        </StyledCard>
        <StyledArrowDownward />
        <StyledCard>
          <CardContent>
            <Typography variant="body1" align="center">
              Article published
            </Typography>
          </CardContent>
        </StyledCard>
      </StyledColumn>

      {/* Middle Column */}
      <StyledColumn>
        <StyledCard>
          <CardContent>
            <Typography variant="body1" align="center">
              Article published
            </Typography>
          </CardContent>
        </StyledCard>
        <StyledArrowUpward />
        <StyledCard>
          <StyledCardContent>
            <Typography variant="h6" align="center">
              Banking Vs Microfinance
            </Typography>
          </StyledCardContent>
        </StyledCard>
      </StyledColumn>

      {/* Right Column */}
      <StyledColumn>
        <StyledCard>
          <StyledCardContent>
            <Typography variant="h6" align="center">
              Future Banking & AI
            </Typography>
          </StyledCardContent>
        </StyledCard>
        <StyledArrowDownward sx={{ color: 'orange' }} />
        <StyledCard>
          <CardContent>
            <Typography variant="body1" align="center">
              Article published
            </Typography>
          </CardContent>
        </StyledCard>
      </StyledColumn>
    </StyledBox>
  );
};

export default EventLayout;
