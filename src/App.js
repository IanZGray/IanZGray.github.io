import './App.css';
import Navi from './components/navbar/Navi.jsx';
import Contact from './pages/contact/Contact.jsx';
import Projects from './pages/projects/Projects.jsx';
import Home from './pages/home/Home.jsx';
import Work from './pages/work/Work.jsx';
import Footer from './components/footer/Footer.jsx';
import VerticalNav from './components/verticalNav/VerticalNav.jsx';

function App() {
  
  return (

      <div className='App'>
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