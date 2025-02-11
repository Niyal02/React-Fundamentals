// import { useRef } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import DisplayProducts from './pages/product-page/display-products';
import "./App.css"
import ProductForm from './pages/form/add-products-form';
import AddProductSuccessRedirect from './pages/form/add-product-success-redirect';

// import { useState, useEffect } from 'react';
// import useTimer from './hooks/useTimer';

// import Counter from './Props_Example/Counter'

//------------Hooks (useState example)------------------------

// //Using hooks here i.e useState
// function App(){
//   //Declare  a variable
//   const [count, setCount] = useState(0); //initializes the count variable with initial value of 0, can be changed as per needed
//   /* Here useState tells the current state of the component and helps to render accordingly based on data if any changes made by the user */
//   return(
//     <div>
//       <h1>Counter: {count}</h1>               {/* here {count} with braces{} tells the react that we are embedding JS expression  */}
//       <button onClick={() => setCount(count+1)}>Increment</button>   {/* here empty parenthesis() denotes anonymous/funtion w no name  */}
//       <button onClick={() => setCount(count-1)}>Decrement</button>   {/* => arrow function is a new/modern way of defining functions  */}
//       <button onClick={() => setCount(0)}>Reset</button>
//     </div>
//   );
// }

//-----------------------Props example------------------------

// function App(){
//   //Declare  a variable
//   const [count, setCount] = useState(0);
  
//   const increment = () => setCount(count + 1);  
//   const decrement = () => setCount(count -1);

  /* |||Dont uncomment this section. Only for understanding||| This way of doing is done in most cases or for more advanced logic/shortcut

   1. setCount(prev => prev + 1);   //what it does is it takes the previous value updated in the useState and adds 1
  
  2. const handleIncrement = () => {
    setCount((prev) => {            // This way of using function allows react to execute one function(correct way) at a time as react will 
      return prev + 1;              // execute the code batch wise if done like above way
    });
    setCount((prev) => {
      return prev + 1;
    });
  }
  */

//   return(
//     <div>
//       <Counter
//         count = {count}
//         onIncrement={increment}
//         onDecrement={decrement}
//       />
//     </div>
//   )
// }

// export default App

//--------------Hooks (useEffect example)------------------------
//Used to fetch data from API when a component loads/handle side effects  , update UI run code when a state changes, cleaning up things

// function App(){
//   const [count, setCount] = useState(0);
  

//   useEffect(()=>{
//     console.log(`Count changed: ${count}. This is changing.`);    //Backtick is used to write num,strings in the same place, w/o needing + 'some string'
//   }, [count])        // [count] in a big bracket tells the code to run everytime the count changes,, if left blank it 
//                     //means run the code only once
//   return(
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={()=>setCount(count+1)}>Increment</button>
//     </div>
//   )
// }
// export default App;

//-------------------Hooks (useRef example)----------------------------
/*used to store value w/o re-rendering the component, access DOM elements(console ma document.getElementById) in browser, 
 use as a reference,ex: browser ko html jastai 'Choose File' use garnu xa w/o making a new ui from scratch than useRef is used*/

//  function App(){              
//   const time = useTimer();   
//   const ref = useRef();    // using useref here

//   return(
//     <div>
//       <h1>Time: {time}</h1>
//       <input type='file' ref={ref} />   {/* get html like style in browser */}
//       <div onClick={() => ref.current.click()}>Upload</div>  {/*By clicking The Upload text will now work as a 'Choose File' */}
//     </div>
//   )
// }

// export default App;
//-------------------Custom Hooks-(check useTimer.js)----------------------------
//a function that uses other hooks inside it, avoids repition of code(resue same logic in multiple places)
// function App(){              //to use this, create a fucntion starting wit keyword 'use'. ex: useFetch
//   const time = useTimer();   //use the hook
//   const ref = useRef();    // using useref just for example

//   return(
//     <div>
//       <h1>Time: {time}</h1>
//       <input type='file' ref={ref} />   {/*  */}
//       <div onClick={() => ref.current.click()}>Upload</div>
//     </div>
//   )
// }


// export default App;

//--------------Creating a simple Timer web app--------------------------
// function App(){
//   const [time, setTime] = useState(0);   //time and setTime are getter and setter provided/used in useState hooks
//   let timer;

//   const handleStart = ()=>{
//     timer = setInterval(()=>{
//       setTime((prevTime)=>prevTime+1);      //prevTime holds the previous value and later adds the prev value to 1
//     },1000)           /* Here 1000 is 1000 millisecond which is equal to 1 sec */
//   }

//   const handleStop =() =>{
//      clearInterval(timer);    //stops the time ||| doesnot work currently because timer reinitializes everytime the component renders
//   }                             // and clearInterval call doesnot have access to the timer ID so we need to use useRef

//   return (
//     <div>
//       <h1>Timer: {time}</h1>
//       <button onClick={handleStart}>Start</button>
//       <button onClick={handleStop}>Stop</button>
//     </div>
//   )
// }

// export default App;

//-----------------------Data Fetching--------------------------
//fetch data using API calls, (get,post,put,delete), consists: axios, usefetch() hook, fetch(), react query, SWR
// using axios

// function App(){
//   return(
//     <div> 
//       <h1>KTM FASHION</h1>
//       <Products />
//     </div>
//   )
// }
// export default App;

//-----------------------React Router Dom (navigation)--------------------------
//it is used for navigating or routing to another page, consists of useNavigate hook, Routes and route, Browser Router, Hash Router are
function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/display-products' element={<DisplayProducts/>}/>
        <Route path='/add-products-form' element={<ProductForm/>}/>
        <Route path='/add-product-success-redirect' element={<AddProductSuccessRedirect/>}/>
      </Routes> 
    </BrowserRouter>
  )
}
export default App;