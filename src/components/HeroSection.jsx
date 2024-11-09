import React from 'react';
import styled from 'styled-components';
import ProfileImage from './profilephoto.jpg'; // Replace with the path to your image

function HeroSection() {
  return (
    <HeroContainer>
      <ProfileWrapper>
        <Profile src={ProfileImage} alt="Profile" />
      </ProfileWrapper>
      <TextContainer>
        <Name>Lakshya Kucheriya</Name>
        <Role>Software Enggineer</Role>
        <Description>
          Passionate about building excellent software that improves the lives of
          those around me. Skilled in both front-end and back-end technologies.
        </Description>
      </TextContainer>
    </HeroContainer>
  );
}

export default HeroSection;

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(135deg, #6a11cb, #2575fc);
  text-align: center;
  color: white;
  padding-top: 100px;
  padding-left: 20px;
  padding-right: 20px;

  @media (max-width: 768px) {
    height: auto;
    padding-top: 50px;
    padding-bottom: 50px;
  }
`;

const ProfileWrapper = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  border: 5px solid white;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
  }

  @media (max-width: 480px) {
    width: 100px;
    height: 100px;
  }
`;

const Profile = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TextContainer = styled.div`
  max-width: 600px;
  padding: 0 20px;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

const Name = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const Role = styled.h2`
  font-size: 1.5rem;
  font-weight: 300;
  color: #e0e0e0;
  margin: 10px 0;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #cccccc;
  margin-top: 20px;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;
