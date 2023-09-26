import './App.css';
import {Route,Routes,BrowserRouter} from 'react-router-dom';
import Create from './pages/Create';
import Home from './pages/Home';
import Play from './pages/Play';
import Quiz from './pages/Quiz';
import Authenticate from './pages/Authenticate';
import HomeCard from './components/HomeCard';
import "./Styling/Create.css"
import ContextApiapp from './ContextAPIApp/ContextApiapp';
import 'bootstrap';
import { Navbar } from 'react-bootstrap';
// import Create1 from './pages/Create1';


function App() {
  return (
    
    
      <BrowserRouter>
      <div>
        <Navbar/>
      
      <Routes>
          
          <Route  path="/create" element={<Create/>}/>
          <Route  path="/Quiz_almabetter" element={<Home/>}/>
          <Route  path="/" element={<Home/>}/>
          <Route  path="/play" element={<Play/>}/>
          <Route  path="/quiz" element={<Quiz/>}/>

          {/* //<Route exact path="/" element={<One/>}/> */}
         
          <Route exact path="/authenticate" element={<Authenticate/>}/>
          {/* <Route exact path="/check" element={<Create1/>}/> */}
         
          
        </Routes> 

      </div>
       
      </BrowserRouter>
      
    
    
  )
}

export default App;
