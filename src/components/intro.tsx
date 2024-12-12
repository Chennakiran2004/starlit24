// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import styled from "styled-components";

// import "./intro.css";



// const StyledVideo = styled.video`
//   width: auto;
//   height: auto;
//   max-height: 500px;
//   object-fit: cover;
//   border-radius: 8px;
//   box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15); /* Add shadow around video */
// `;

// const StartingPage=() => {

//   const navigate = useNavigate();
//   const [isVideoWatched, setIsVideoWatched] = useState(false);
//   const handleVideoEnd = () => {
//     console.log("Video completed!");
//     setIsVideoWatched(true); // Update state
//   };
//   // const navigate = useNavigate();

//   useEffect(() => {
//     // Redirect to another page after 2.9 seconds
//     // const timer = setTimeout(() => {

//     if (isVideoWatched){
//       navigate("/Home"); // Replace '/Home' with the route you want to redirect to
//     // }, 5500);
//     }


//     // Cleanup the timer when the component is unmounted
//     // return () => clearTimeout(timer);
//   }, [isVideoWatched]);

//   return (

//     <div >
//     <div className="body-xl-container">
//         <div className="video-container-layout-xl">
      
//             <video
//   id="intro-video"
//   autoPlay
//   loop
//   muted
//   onEnded={handleVideoEnd}
//   className="video"
// >
//   <source
//     src="/black bg Final logo animation.mp4"
//     type="video/mp4"
//   />
// </video>

//             <div className="upper-container-absolute-xl ">
//                 <div className=" upper-container-absolute-xl  d-flex flex-row justify-content-center" style={{padding:"32px"}}>

          // <StyledVideo
          //   src="/black bg Final logo animation.mp4"
          //   autoPlay
          //   loop
            
          //   muted
          // />
//     </div>
//                 </div>

//             </div>
//         </div>
//     </div>

//   );
// };

// export default StartingPage;
import React, { useEffect, useRef, useState } from "react";
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
  const [isVideoWatched, setIsVideoWatched] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoEnd = () => {
    console.log("Video completed!");
    setIsVideoWatched(true);
  };

  useEffect(() => {
    if (isVideoWatched) {
      navigate("/Home");
    }
  }, [isVideoWatched, navigate]);

  // Ensure video plays only once
  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener('ended', handleVideoEnd);
      
      // Remove loop to ensure video plays only once
      videoElement.removeAttribute('loop');

      return () => {
        videoElement.removeEventListener('ended', handleVideoEnd);
      };
    }
  }, []);

  return (
    <div>
      <div className="body-xl-container">
        <div className="video-container-layout-xl">
          <video
            ref={videoRef}
            id="intro-video"
            autoPlay
            loop
            muted
            className="video"
          >
            <source
              src="/black bg Final logo animation.mp4"
              type="video/mp4"
            />
          </video>

          {/* Optional content, if needed */}
          <div className="upper-container-absolute-xl">
            <div
              className="upper-container-absolute-xl d-flex flex-row justify-content-center"
              style={{ padding: "32px" }}
            >
              {/* Additional content can go here */}
              <StyledVideo
                src="/black bg Final logo animation.mp4"
                autoPlay
                loop
                muted
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartingPage;
