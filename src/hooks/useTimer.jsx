// import { useState, useEffect } from 'react';

// function useTimer(){
//     const [time, setTime] = useState(0);
    
//     useEffect(()=>{
//         const timer = setInterval(()=>{
//             setTime((prev) => prev +1);
//         },1000)
//         return ()=>clearInterval(timer);     //its a cleanup function, used to stop the activity/timer
//     })                                       // also used in eventListener
//     return time;
// }

// export default useTimer;