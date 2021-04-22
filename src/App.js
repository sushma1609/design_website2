
import './App.css';
import About from './components/About';
import { Contact } from './components/Contact';
import  Food  from './components/Food';
import FoodMenu from './components/FoodMenu';
import NavbarElement from './components/Navbar/NavbarElement';
import { Showcase } from './components/Showcase';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="App">
      <NavbarElement/>
      <Showcase/>
      <About/>
      <Food/>
      <FoodMenu/>
      <Testimonials/>
      <Contact/>
    </div>
  );
}

export default App;
