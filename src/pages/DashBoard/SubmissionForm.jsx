import React from 'react';
import { Grid, Typography, Paper, Box, Avatar, Button } from '@mui/material';
import FileUploadIcon from '@mui/icons-material/UploadFile';

const SubmissionForm = () => {
  const submissions = [
    'Outline',
    'Detail analysis and field report',
    'Presentation submission (debate)',
    'Presentation submission (Shorts)',
  ];

  return (
    <Box sx={{ padding: '50px', maxWidth: '600px', margin: '0 auto' , marginTop:'80px'}}>
      <Grid container spacing={3} alignItems="center">
        {/* Left Avatar Section */}
        <Grid item xs={2} container justifyContent="center">
          <Avatar sx={{ width: 80, height: 80, backgroundColor: '#d0d0d0' }}>
            <Typography>Submission</Typography>
          </Avatar>
        </Grid>

        {/* Right form Section */}
        <Grid item xs={10}>
          {submissions.map((submission, index) => (
            <Grid container alignItems="center" key={index} spacing={2} sx={{ mb: 2 }}>
              <Grid item xs={8}>
                <Paper
                  elevation={1}
                  sx={{
                    padding: '10px',
                    backgroundColor: '#d0d0d0',
                    borderRadius: '20px',
                  }}
                >
                  <Typography>{submission}</Typography>
                </Paper>
              </Grid>

              <Grid item xs={4}>
                <Button
                  variant="outlined"
                  startIcon={<FileUploadIcon />}
                  sx={{
                    textTransform: 'none',
                    fontWeight: 'normal',
                  }}
                >
                  Upload your document
                </Button>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default SubmissionForm;
