import './App.css';
import { Analytics } from './component/Analytics';
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
    </>
  );
}

export default App;
