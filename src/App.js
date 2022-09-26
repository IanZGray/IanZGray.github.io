import './App.css';
import Navi from './components/navbar/Navi.jsx';
import Contact from './pages/contact/Contact.jsx';
import Projects from './pages/projects/Projects.jsx';
import Home from './pages/home/Home.jsx';
import Work from './pages/work/Work.jsx';
import Footer from './components/footer/Footer.jsx';
import VerticalNav from './components/verticalNav/VerticalNav.jsx';


function App() {
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();
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