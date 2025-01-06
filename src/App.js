import Navbar from "./Comps/Navbar/Navbar.jsx";
import Intro from "./Comps/Intro/Intro.jsx";
import "./App.css"
import Services from "./Comps/Services/Services.jsx";
import Experience from "./Comps/Experience/Experience.jsx";
import Works from "./Comps/Works/Works.jsx";
import Portfolio from './Comps/Portfolio/Portfolio.jsx';
import Contact from "./Comps/Contact/Contact.jsx";
import Footer from "./Comps/Footer/Footer.jsx";
import { useSelector } from 'react-redux'; 


function App() {

  const mode = useSelector((state) => state.mode.mode); 

  return (
    
    <div style={mode === "dark" ? {backgroundColor:"#021526",color:'white'} : {}} className="App">

      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Works />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;