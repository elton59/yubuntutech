
import './App.css';
import  Header from './components/Header/Header';
import Body from './components/Body';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import SupportUs from './components/SupportUs';
import ProjectDescription from './components/ProjectDescription';
import Description from './components/Description';
import  {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import MyContextProvider from './context/MyContext';
  
function App() {

 
  return (
    <Router>
    <div className="App">
    <MyContextProvider>
      <Header/>
      <Routes>
       <Route path="/" exact element={<Body/>}  />
       <Route path="/AboutUS"  element={<AboutUs/>}/>
       <Route path="/SupportUS"  element={<SupportUs/>}/>
       <Route path="/ProjectDescription/:id" element={<Description/>}/>
       <Route path="/Description/:id" element={<Description/>} />
       </Routes>
       <Footer/>
         </MyContextProvider>
    </div>
    </Router>

   
  );

}

export default App;
