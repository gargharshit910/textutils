import "./App.css";
import Navbar from "./Navbar"
import TextForm from "./textform"
import About from "./about"
function App() {
  return (
    <>
      <Navbar textutils = "Textutils" home = "home" abouttext= "About us"/>
   <div className = "container my-3">
     {/* <TextForm heading = "Enter The Text To Analyze Below"/> */}
    <About/>


   </div>
    </>
  );
}

export default App;
