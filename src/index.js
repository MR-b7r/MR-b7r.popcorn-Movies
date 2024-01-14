import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import StartRating from './StarRating';
import './index.css';
import App from './App';

// function Test() {
//   const [movieRating, setMovieRating] = useState(0)
//   return (
//     <div>
//       <StartRating color='blue' maxRating={10} onSetRating={setMovieRating}/>
//       <p>This movies was rated {movieRating} stars</p>
//     </div>
//   )
// }
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <StartRating maxRating={5} messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]} className='test' defaultRating={3}/> */}
    {/* <Test /> */}
  </React.StrictMode>
);
