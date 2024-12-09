import React from "react";
import Slider, { Settings } from "react-slick";
// Import slick-carousel's CSS in your main component or entry point (index.tsx, App.tsx, etc.)
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./carousalimg.css";

// Define an interface for the testimonial data
interface Testimonial {
  image: string;
  id: string;
}

// Sample testimonial array with image paths
const TestimonialsArray: Testimonial[] = [
  { image: "https://i.ibb.co/XLx5Rty/C1181T01.jpg", id: "1" },
  { image: "https://i.ibb.co/2gQt8Ms/DSC02857.jpg", id: "2" },
  { image: "https://i.ibb.co/p21qVq1/C1177T01.jpg", id: "3" },
  { image: "https://i.ibb.co/dGvdjND/C1159T01.jpg", id: "4" },
  { image: "https://i.ibb.co/jD8GdQM/DSC02870.jpg", id: "5" },
  { image: "https://i.ibb.co/FYDMcb4/DSC02918.jpg", id: "6" },
];

const Testimonials: React.FC = () => {
  // Slider settings with responsive breakpoints
  const settings: Settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3, // 3 slides when screen width is 900px and above
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // 2 second autoplay interval
    speed: 1000,
    centerMode: true, // Center mode enabled for larger screens
    centerPadding: "50px", // Adds padding on both sides of the center slide
    focusOnSelect: true, // Ensures that the centered slide is clickable
    responsive: [
      {
        // From 600px to 900px
        breakpoint: 900,
        settings: {
          centerMode: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerPadding: "50px",
        },
      },
      {
        // Below 600px
        breakpoint: 700,
        settings: {
          centerMode: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="ourCoreTeam" id="gallery">
      <div className="heading">
        <h1 className="gallery-head" style={{ color: "rgb(107 33 168 )" }}>
          Gallery
        </h1>
      </div>
      <div className="innerContainer">
        <div className="slider-container">
          <Slider {...settings}>
            {TestimonialsArray.map((eachPerson) => (
              <div key={eachPerson.id}>
                <img
                  src={eachPerson.image}
                  alt={` ${eachPerson.id}`}
                  className="Crousel-image"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      
      
  <h2 className="more-images-heading" style={{textAlign:"center"}}>Click for More Images</h2>
  <div className="drive-link-container">
    <span
      className="drive-link"
      onClick={() => window.open('https://drive.google.com', '_blank')}
    >
      Go to Drive
    </span>

</div>

    </div>
  );
};

export default Testimonials;
