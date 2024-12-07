import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import "./intro.css";



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
    }, 5500);

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
