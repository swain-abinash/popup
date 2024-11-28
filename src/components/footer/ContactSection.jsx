import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import styled from 'styled-components';
import { Formik, Form, Field } from 'formik';
import PhoneIcon from '@mui/icons-material/Phone';
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send';

const validate = (values) => {
  const errors = {};

  // Name validation
  if (!values.name) {
    errors.name = 'Name is required';
  } else if (values.name.length < 2) {
    errors.name = 'Name must be at least 2 characters';
  }

  // Email validation
  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email is invalid';
  }

  // Message validation
  if (!values.message) {
    errors.message = 'Message is required';
  } else if (values.message.length < 5) {
    errors.message = 'Message must be at least 5 characters';
  }

  return errors;
};

const ContactSection = () => {
  return (
    <ContactContainer>
      <HeaderSection>
        <Typography variant="h4" component="h2">
          Get in Contact with Us
        </Typography>
      </HeaderSection>

      <MainContent>
        <InfoSection>
          <Typography variant="body1">Reach out with any questions or inquiries!</Typography>
          <InfoItem>
            <IconWrapper>
              <PhoneIcon />
              <Typography variant="body1" color="primary">Call us</Typography>
            </IconWrapper>
            <Typography>XXXXXXXXXXX</Typography>
          </InfoItem>
          <InfoItem>
            <IconWrapper>
              <HomeIcon />
              <Typography variant="body1" color="primary">Visit us</Typography>
            </IconWrapper>
            <Typography>XXXXXXXXXXXXXXXX</Typography>
          </InfoItem>
          <InfoItem>
            <IconWrapper>
              <EmailIcon />
              <Typography variant="body1" color="primary">Email us</Typography>
            </IconWrapper>
            <Typography>XXXXXXXXXXXXX</Typography>
          </InfoItem>
        </InfoSection>
        <FormSection>
          <Formik
            initialValues={{ name: '', email: '', message: '' }}
            validate={validate} // Custom validation function
            onSubmit={(values, { setSubmitting }) => {
              console.log(values);
              setSubmitting(false); // Reset form submission state
            }}
          >
            {({ handleChange, handleBlur, values, errors, touched, isValid, isSubmitting }) => (
              <Form>
                <StyledField
                  name="name"
                  as={TextField}
                  label="Your name"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.name && Boolean(errors.name)}
                  helperText={touched.name && errors.name}
                />
                <StyledField
                  name="email"
                  as={TextField}
                  label="Your email"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                />
                <StyledField
                  name="message"
                  as={TextField}
                  label="Your message"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={2}
                  margin="normal"
                  value={values.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.message && Boolean(errors.message)}
                  helperText={touched.message && errors.message}
                />
                <StyledButton
                  type="submit"
                  variant="contained"
                  fullWidth
                  startIcon={<SendIcon />}
                  disabled={!isValid || isSubmitting}
                >
                  Send Message
                </StyledButton>
              </Form>
            )}
          </Formik>
        </FormSection>
      </MainContent>
    </ContactContainer>
  );
};

export default ContactSection;

const ContactContainer = styled(Box)`
  padding: 40px;
  font-family: Arial, sans-serif;
  border-radius: 28px;
  box-shadow: 35px 35px 70px #5a5a5a, -35px -35px 70px #ffffff;
  @media (max-width: 480px) {
    padding: 20px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    padding: 30px;
  }
`;

const HeaderSection = styled(Box)`
  margin-bottom: 10px;
  color: white;
  display: inline-block;
  border-bottom: 2px solid white;
  padding-bottom: 8px;
  font-size: 2rem;
  text-shadow:
    0 0 5px #ff00ff,
    0 0 10px #ff00ff,
    0 0 15px #4b044b,
    0 0 20px #ff00ff,
    0 0 25px hsl(300, 28.155339805825246%, 20.19607843137255%),
    0 0 30px rgb(163, 8, 163);

  @media (max-width: 480px) {
    margin-left: 5px;
    font-size: 1.2rem;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    margin-left: 5px;
    font-size: 1.5rem;
  }

  @media (min-width: 769px) {
    margin-left: 0;
    font-size: 2rem;
  }
`;

const MainContent = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;
  height: auto;
  border-radius: 28px;

  @media (min-width: 769px) {
    height: 400px;
  }
`;

const InfoSection = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 25px;
  max-width: 220px;
  color: white;
  & > p:first-child {
    margin-top: 10px; /* Add top margin to the first Typography */
  }

  @media (max-width: 480px) {
    max-width: 100%;
    font-size: 0.8rem;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    max-width: 300px;
    font-size: 1rem;
  }
`;

const InfoItem = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 5px;
  color: white;
  font-size: 0.9rem;
  
  & > p {
    margin-top: 10px; /* Adding margin-top to Typography */
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const IconWrapper = styled(Box)`
  display: flex;
  align-items: center;
  gap: 10px;
  color: white;

  &:hover {
    color: #ff00ff;
    transition: color 0.3s ease;
    text-shadow:
      0 0 5px #ff00ff,
      0 0 10px #ff00ff,
      0 0 15px #ff00ff,
      0 0 20px #ff00ff,
      0 0 25px #ff00ff;
  }
`;

const FormSection = styled(Box)`
  width: 100%;
  max-width: 400px;
  margin-top: 5px; 
  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0 10px;
  }
`;

const StyledField = styled(Field)`
  width: 100%;
  margin-bottom: 10px;

  & .MuiInputLabel-root {
    color: #ffffff;
    font-size: 0.9rem;
  }

  & .MuiInputLabel-root.Mui-focused {
    color: #ffffff;
  }

  & .MuiOutlinedInput-root {
    & fieldset {
      border-color: #cfcfcf;
    }
    &:hover fieldset {
      border-color: #ffffff;
    }
    &.Mui-focused fieldset {
      border-color: #ffffff;
    }
  }

  & .MuiOutlinedInput-input {
    color: #ffffff;
    font-size: 0.9rem;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 8px;

    & .MuiInputLabel-root {
      font-size: 0.8rem;
    }

    & .MuiOutlinedInput-input {
      font-size: 0.8rem;
    }
  }
`;

const StyledButton = styled(Button)`
  background-image: linear-gradient(45deg, rgb(67, 5, 118), #ff6ec7);
  color: white;
  font-weight: bold;
  transition: background-image 0.3s ease;
   @media (max-width: 480px) {
    margin-top: 20px;
    padding: 10px;
    font-size: 0.8rem;
  }
`;