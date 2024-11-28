import { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box, Divider } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styled from 'styled-components';

// FAQ data
const faqData = [
  {
    question: "What is the purpose of this FAQ section?",
    answer: "This section provides answers to the most common questions regarding our product and services."
  },
  {
    question: "How do I get started with your service?",
    answer: "To get started, sign up on our website, and follow the easy onboarding process."
  },
  {
    question: "Is there any trial period for the service?",
    answer: "Yes, we offer a 14-day free trial for all new users to explore the features."
  },
  {
    question: "Can I upgrade my plan anytime?",
    answer: "Yes, you can upgrade your plan at any time through your account settings."
  },
  {
    question: "What support do you provide?",
    answer: "We offer 24/7 live chat support and an extensive help center for all our users."
  },
];
const FAQSection = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <FAQContainer>
      <FAQHeading variant="h4">Frequently Asked Questions</FAQHeading>
      <StyledDivider />

      {faqData.map((faq, index) => (
        <StyledAccordion
          key={index}
          expanded={expanded === index}
          onChange={() => setExpanded(expanded === index ? false : index)}
        >
          <StyledAccordionSummary expandIcon={<StyledExpandIcon />}>
            <Typography variant="h6">
              {faq.question}
            </Typography>
          </StyledAccordionSummary>
          <StyledAccordionDetails>
            <Typography>{faq.answer}</Typography>
          </StyledAccordionDetails>
        </StyledAccordion>
      ))}
    </FAQContainer>
  );
};

// Styled components
const FAQContainer = styled(Box)`
  padding: 50px;
  border-radius: 12px;
  margin: auto;
  width: 85%;
  
    @media (max-width: 1024px) {
    padding: 40px;
  }

  @media (max-width: 768px) {
    padding: 30px;
    width: 95%;
  }

  @media (max-width: 480px) {
    padding: 20px;
    width: 85%;
  }
 `;

const FAQHeading = styled(Typography)`
  margin-bottom: 30px;
  padding-bottom:20px;
  color: white;
  text-shadow: 0px 0px 15px rgba(233, 30, 99, 1), 0px 0px 25px rgba(106, 27, 154, 0.9);
  font-weight: bold;
  letter-spacing: 2px;
  animation: glow 1.5s ease-in-out infinite alternate;

  @keyframes glow {
    from {
      text-shadow: 0px 0px 10px rgba(233, 30, 99, 0.5), 0px 0px 20px rgba(106, 27, 154, 0.7);
    }
    to {
      text-shadow: 0px 0px 15px rgba(233, 30, 99, 1), 0px 0px 25px rgba(106, 27, 154, 0.9);
    }
  }
     @media (max-width: 1024px) {
    font-size: 1.8rem;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const StyledDivider = styled(Divider)`
  border-color: white;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    margin-bottom: 15px;
  }
  @media (max-width: 480px) {
    margin-bottom: 10px;
  }

`;

const StyledAccordion = styled(Accordion)`
  background-color: rgba(0, 0, 0, 0.3);
  margin-bottom: 10px;
  border-radius: 10px;
  &:hover {
    box-shadow: 0px 0px 25px rgba(233, 30, 99, 0.5);
    transform: scale(1.05);
    transition: box-shadow 0.3s ease, transform 0.3s ease;
  }

  &.Mui-expanded {
    box-shadow: 0px 0px 20px rgba(233, 30, 99, 0.5);
  }
    @media (max-width: 768px) {
    margin-bottom: 8px;
  }

  @media (max-width: 480px) {
    margin-bottom: 5px;
  }

    
`;

const StyledAccordionSummary = styled(AccordionSummary)`
  background-color: #6a1b9a;
  color: white;
  &:hover {
    background-color: #7b1fa2;
  }
      @media (max-width: 1024px) {
    padding: 8px;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }

`;

const StyledExpandIcon = styled(ExpandMoreIcon)`
  color: #e91e63;
    @media (max-width: 480px) {
    font-size: 1.2rem;
  }

`;

const StyledAccordionDetails = styled(AccordionDetails)`
  background-color: #2a2a2a;
  padding: 15px;
  border-radius: 0 0 10px 10px;
  color: white;
    @media (max-width: 1024px) {
    padding: 12px;
  }

  @media (max-width: 768px) {
    padding: 10px;
  }

  @media (max-width: 480px) {
    padding: 8px;
  }

`;
export default FAQSection;
