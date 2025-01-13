
import './App.css';
import Accordian from './components/accordian';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';

function App() {
  return (
    <div className="App">
     {/* Accordian componenet */}
     {/* <h1>Accordian Component</h1>
     <Accordian /> */}
      {/* Random Color component */}
     {/*<h1>Random Color component</h1> */}
     {/* <RandomColor/> */}
      {/* Star Rating component */}
     <StarRating noOfStars={10}/>
    </div>
  );
}

export default App;
