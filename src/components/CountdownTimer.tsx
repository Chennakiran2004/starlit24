import React, { useState, useEffect } from 'react';
import './countdown.css';
interface CountdownTimerProps {
    onTimerComplete?: () => void; // Prop to notify parent about timer completion
  }
export function CountdownTimer({ onTimerComplete }: CountdownTimerProps){
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Function to calculate the time left
  const calculateTimeLeft = () => {
    const eventDate = new Date('2024-12-13T14:00:00').getTime();
    const now = new Date().getTime();
    const difference = eventDate - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      if (onTimerComplete) {
              onTimerComplete(); // Notify the parent component when the timer is done
            }
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }
  };

  useEffect(() => {
    // Update the timer every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Cleanup interval on component unmount
  });

  return (
    <div className="flex justify-center gap-4 md:gap-8 text-white">
      {timeLeft.days===0 && timeLeft.hours===0 && timeLeft.minutes===0 && timeLeft.seconds===0 ?
      <div className="bg-indigo-600/30 backdrop-blur-sm rounded-lg p-3 md:p-4" style={{ 
        padding: "8px 23px"}}>
       <h1 style={{fontSize: "2rem"}}>Let the <span className="text-violet-600 funElement" style={{fontSize: "2.5rem",color: "#FEDE6C",}}>Fun</span> begin</h1> </div>
       : Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="text-center">
          <div className="bg-indigo-600/30 backdrop-blur-sm rounded-lg p-3 md:p-4">
            <div className="text-2xl md:text-4xl font-bold">{value}</div>
            <div className="text-xs md:text-sm uppercase">{unit}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

// import React, { useState, useEffect } from 'react';

// interface CountdownTimerProps {
//   onTimerComplete?: () => void; // Prop to notify parent about timer completion
// }

// export function CountdownTimer({ onTimerComplete }: CountdownTimerProps) {
//   const [timeLeft, setTimeLeft] = useState({
//     days: 0,
//     hours: 0,
//     minutes: 0,
//     seconds: 0,
//   });

//   // Function to calculate the time left
//   const calculateTimeLeft = () => {
//     const eventDate = new Date('2024-12-7T12:30:00').getTime();
//     const now = new Date().getTime();
//     const difference = eventDate - now;

//     if (difference > 0) {
//       return {
//         days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//         hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
//         minutes: Math.floor((difference / (1000 * 60)) % 60),
//         seconds: Math.floor((difference / 1000) % 60),
//       };
//     } else {
//       return {
//         days: 0,
//         hours: 0,
//         minutes: 0,
//         seconds: 0,
//       };
//     }
//   };

//   useEffect(() => {
//     // Update the timer every second
//     setInterval(() => {
//       setTimeLeft(calculateTimeLeft());
//     }, 1000);

//     // Check if the timer is done
//     if (timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0) {
//       if (onTimerComplete) {
//       onTimerComplete(); // Notify the parent component when the timer is done
//     }}

//   // Cleanup interval on component unmount
//   }, [timeLeft, onTimerComplete]);

//   return (
//     <div className="flex justify-center gap-4 md:gap-8 text-white">
//       {Object.entries(timeLeft).map(([unit, value]) => (
//         <div key={unit} className="text-center">
//           <div className="bg-indigo-600/30 backdrop-blur-sm rounded-lg p-3 md:p-4">
//             <div className="text-2xl md:text-4xl font-bold">{value}</div>
//             <div className="text-xs md:text-sm uppercase">{unit}</div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }
