import {BrowserRouter as Router, 
Routes, 
Route
} from 'react-router-dom';


import './App.css';
import Navi from './components/navbar/Navi.jsx';
import Contact from './pages/contact/Contact.jsx';
import Projects from './pages/projects/Projects.jsx';
import Error from './pages/error/Error.jsx';
import Home from './pages/home/Home.jsx';
import Work from './pages/work/Work.jsx';
import About from './pages/about/About';
import Footer from './components/footer/Footer.jsx';
import VerticalNav from './components/verticalNav/VerticalNav.jsx';
// import bGVideo from './images/testvid2.mp4';

function App() {
  return (
    // <Router >
    //   {/* <video src={bGVideo} autoplay="autoplay" muted loop /> */}
    //   <Navi></Navi>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/projects" element={<Projects />} />
    //     <Route path="/work" element={<Work />} />
    //     <Route path="/about" element={<About />} />
    //     <Route path="/contact" element={<Contact />} />
    //     <Route path="*" element={<Error />} />
    //   </Routes>

    //   <Footer></Footer>
    // </Router>
      <div className='App'>
        {/* <video src={bGVideo} autoplay="autoplay" muted loop /> */}
          <Navi />
          <VerticalNav />
            <Home />
            <Projects />
            <Work />
            <Contact />
          <Footer />
      </div>
  );
}

export default App;
