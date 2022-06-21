import './App.css';
import { Analytics } from './component/Analytics';
import { Cards } from './component/Cards';
import { Footer } from './component/Footer';
import { Hero } from './component/Hero';
import { Navbar } from './component/Navbar';
import { NewsLetter } from './component/NewsLetter';
function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Analytics/>
      <NewsLetter/>
      <Cards/>
      <Footer/>
    </>
  );
}

export default App;

