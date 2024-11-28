import React from "react";
import styled from "styled-components";

// Styled Components
const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PopupContainer = styled.div`
  background-color: white;
  border: 2px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 50%;
  max-width: 400px;
  text-align: center;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 16px;
`;

const Text = styled.p`
  margin: 8px 0;
  font-size: 1rem;

  strong {
    font-weight: bold;
  }
`;

const CloseButton = styled.button`
  margin-top: 16px;
  padding: 10px 16px;
  background-color: #ef4444;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #b91c1c;
  }
`;

// Popup Component
const Popup = ({ userdetails, setUserdetails }) => {
    console.log(userdetails);
    
  return (
    <div>
      {userdetails && (
        <Overlay>
          <PopupContainer>
            <Title>User Details</Title>
            <Text>
              <strong>Name:</strong> {userdetails.title}
            </Text>
            <Text>
              <strong>Position:</strong> {userdetails.description}
            </Text>
            <CloseButton onClick={() => setUserdetails(null)}>
              Close
            </CloseButton>
          </PopupContainer>
        </Overlay>
      )}
    </div>
  );
};

export default Popup;
