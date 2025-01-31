
import './App.css';
import Accordian from './components/accordian';
import ImageSlider from './components/image-slider';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';
import LoadMoreData from './components/load-more-data';
import TreeView from './components/tree-view';
import menus from "./components/tree-view/data";
import QRCodeGenerator from './components/qr-code-generator';
import LightDarkMode from './components/light-dark-mode';
import ScrollIndicator from './components/scroll-indicator';
import TabsTest from './components/custom-tabs/tab-test';
import ModalTest from './components/custom-modal-popup/modal-test';
import GithubProfileFider from './components/github-profile-finder';
import SearchAutoComplete from './components/search-auto-complete';
import Tiktaktoe from './components/tik-tak-toe';
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
      {/* <TreeView menus={menus}/> */}
      {/* QRCodeGenerator */}
      {/* <QRCodeGenerator/> */}
      {/* LightDarkMode */}
      {/* <LightDarkMode/> */}
      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />  */}
      {/* This is our custom tabs component*/}
      {/* <TabsTest/> */}
      {/* This is our custom modal popup*/}
      {/* <ModalTest/> */}
      {/* This is our Github-profile-finder*/}
      {/* <GithubProfileFider/> */}
      {/* This is our Serch Auto Complete*/}
      {/* <SearchAutoComplete/> */}
      {/* This is our Tik tak toe*/}
      <Tiktaktoe/>





      
    </div>
  );
}

export default App;
