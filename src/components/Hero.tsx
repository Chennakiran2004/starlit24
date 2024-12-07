// import React from 'react';
// import { Calendar, MapPin } from 'lucide-react';
// import { CountdownTimer } from './CountdownTimer';


// interface HeroProps {
//   handleTimerCompletion: () => void; // Declare the function prop
// }

// export function Hero({ handleTimerCompletion }: HeroProps) {




//   return (
//     <div id="home" className="relative min-h-screen flex items-center justify-center" style={{backgroundColor: "white"}}>
//       <div className="absolute inset-0">
//         <img
//           src="https://images.unsplash.com/photo-1523580494863-6f3031224c94"
//           alt="College campus"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-purple-900/70 to-purple-900/90"></div>
//       </div>

     
      
//       <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
//          <div style={{display:"flex", justifyContent:"center"}}>
//           <img src="https://i.ibb.co/HV8DpnR/final-pic-1.png" style={{height:"300px", width:"300px"}}/>
//          </div>
//         <h1 className="text-5xl md:text-7xl font-bold mb-6">NIAT Starlit 2024</h1>
//         <p className="text-xl md:text-2xl mb-12">"A Day of Glitz, Glamour, and New Beginnings!"</p>
        
//       <CountdownTimer onTimerComplete={handleTimerCompletion} />
        
        
//         <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12 mb-8">
//           <div className="flex items-center">
//             <Calendar className="mr-2" />
//             <span>December 13, 2024 | 2:00 AM - 8:00 PM</span>
//           </div>
//           <div className="flex items-center">
//             <MapPin className="mr-2" />
//             <a href ="https://www.google.com/maps/place/P+V+Conventions/@17.3423148,78.3190736,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb95ad71763d95:0xbd4d4e3b0de2acef!8m2!3d17.3423097!4d78.3216485!16s%2Fg%2F11sgbl63zh?entry=ttu&g_ep=EgoyMDI0MTIwNC4wIKXMDSoASAFQAw%3D%3D">PV Conventions</a>
//           </div>
//         </div>
        
       
//       </div>
//     </div>
//   );
// }

// // Countdown Timer Script

import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { CountdownTimer } from './CountdownTimer';
import "./hero.css"
interface HeroProps {
  handleTimerCompletion: () => void; // Declare the function prop
}

export function Hero({ handleTimerCompletion }: HeroProps) {
  return (
    <div id="home" className="relative min-h-screen flex items-center justify-center" style={{ backgroundColor: 'white' }}>
      {/* Background video */}
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="videoplayback.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/70 to-purple-900/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img
            src="https://i.ibb.co/HV8DpnR/final-pic-1.png"
            style={{ height: '300px', width: '300px' }}
            alt="Event logo"
          />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6">NIAT<span className="StarlitFont" style={{ color: '#FEDE6C' }}> STARLIT </span>2024</h1>
        <p className="text-xl md:text-2xl mb-12">"A Day of Glitz, Glamour, and New Beginnings!"</p>

        <CountdownTimer onTimerComplete={handleTimerCompletion} />

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12 mb-8">
          <div className="flex items-center">
            <Calendar className="mr-2" />
            <span>December 13, 2024 | 2:00 AM - 8:00 PM</span>
          </div>
          <div className="flex items-center">
            <MapPin className="mr-2" />
            <a
              href="https://www.google.com/maps/place/P+V+Conventions/@17.3423148,78.3190736,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb95ad71763d95:0xbd4d4e3b0de2acef!8m2!3d17.3423097!4d78.3216485!16s%2Fg%2F11sgbl63zh?entry=ttu&g_ep=EgoyMDI0MTIwNC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              PV Conventions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
