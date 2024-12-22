
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Header/>
      <Hero />
      <About/>
      <Projects/>
      <Resume/>
      <Contact/>
      <Footer/>
     {/* <h1 className="text-3xl font-thin underline text-red-600">Start with Project</h1> */}
    </div>
  );
}

export default App;
