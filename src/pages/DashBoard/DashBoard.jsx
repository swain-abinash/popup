import React from 'react'

import { Box } from '@mui/material';
import EventComponent from './EventComponent'
import EventLayout from './EventLayout'
import SubmissionForm from './SubmissionForm'
import CircularProgressWithLabel from './CircularProgressWithLabel'

const DashBoard = () => {
  return (
    <>
      <EventComponent/>
      <EventLayout/>
      <SubmissionForm/>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        bgcolor="#f5f5f5"
      >
        <CircularProgressWithLabel value={40} maxPoints={100} />
      </Box> 
    </>
  )
}

export default DashBoard