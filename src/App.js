import Header from "./Components/Header";
import {Route, Routes} from "react-router-dom"

import MyProjects from "./Pages/MyProjects";
import Contact from "./Pages/Contact";

import Nav from "./Components/Nav";
function App() {
  return (
    <div className="App">
    
    <Nav />
     <Routes>
     <Route exact path = "/" element = {<h1><Header /></h1>} />
     <Route exact path ="/myProjects" element = {<MyProjects />} />
     <Route exact path ="/Contact" element ={<Contact />} />
    
      
     </Routes>
     
     
    </div>
  );
}

export default App;
