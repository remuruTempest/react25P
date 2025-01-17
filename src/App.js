
import './App.css';
import Accordian from './components/accordian';
import ImageSlider from './components/image-slider';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';
import LoadMoreData from './components/load-more-data';
import TreeView from './components/tree-view';
import menus from "./components/tree-view/data";

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
     {/* <StarRating noOfStars={10}/> */}
     {/* Image slidere */}
     {/* <ImageSlider url={"https://picsum.photos/v2/list"} 
             page={"1"}
             limit={"10"}/> */}
      {/* Load More Data */}
      {/* <LoadMoreData/> */}
      {/* <h1>TreeView Component / menu  UI component/ recursive navigation menu</h1> */}
      <TreeView menus={menus}/>
      
      
    </div>
  );
}

export default App;
