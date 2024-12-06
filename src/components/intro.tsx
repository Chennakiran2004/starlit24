import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import {

  TextMainConainer,
} from "./styled";
import "./intro.css";
// Define the scale-in animation using keyframes
const scaleIn = keyframes`
  0% {
    transform: scale(0);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const IntroStartingContainer = styled.div`
  width: 100% !important;
  height: 100vh !important;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #000;

  @media screen and (min-width: 768px) {
    width: 100vw;
  }

  @media screen and (min-width: 1280px) and (max-width: 1792px) and (min-resolution: 2dppx) {
    overflow: auto;
    scrollbar-width: none;
  }
`;

const IntroSubContainer = styled.div`
  width: 100vw !important;
  height: 100vh !important;
  background-color: #7f3dff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 768px;
    height: 72vh;
    margin: auto;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15); /* Add shadow here */
  }
`;

const Heading = styled.h1`
  font-size: 36px;
  color: white;
  animation: ${scaleIn} 1s ease-in-out;
`;

const StyledVideo = styled.video`
  width: auto;
  height: auto;
  max-height: 500px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15); /* Add shadow around video */
`;

const StartingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to another page after 2.9 seconds
    const timer = setTimeout(() => {
      navigate("/Home"); // Replace '/Home' with the route you want to redirect to
    }, 4500);

    // Cleanup the timer when the component is unmounted
    return () => clearTimeout(timer);
  }, [navigate]);

  return (

    <div >
    <div className="body-xl-container">
        <div className="video-container-layout-xl">
            {/* <video id playsinline muted autoplay loop preload className="video">
                <source src="https://framerusercontent.com/assets/ko35BsaJ7J1R7FWR1CFgc0keg.mp4" type="video/mp4">
            </video> */}
            <video
  id="intro-video"
  autoPlay
  loop
  muted
  preload="auto"
  className="video"
>
  <source
    src="/black bg Final logo animation.mp4"
    type="video/mp4"
  />
</video>

            <div className="upper-container-absolute-xl ">
                <div className=" upper-container-absolute-xl  d-flex flex-row justify-content-center" style={{padding:"32px"}}>
    {/* <IntroStartingContainer> */}
      {/* <IntroSubContainer>
        <TextContainer> */}
          <StyledVideo
            src="/black bg Final logo animation.mp4"
            autoPlay
            loop
            muted
          />
          {/* <TextMainConainer> */}
            {/* <PersonaText>Persona</PersonaText>
            <CAContainer>
              <CAText>CA</CAText>
            </CAContainer> */}
          {/* </TextMainConainer> */}
        {/* </TextContainer>
      </IntroSubContainer> */}
    {/* </IntroStartingContainer> */}
    </div>
                </div>

            </div>
        </div>
    </div>

  );
};

export default StartingPage;
