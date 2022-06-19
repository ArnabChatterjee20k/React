import './App.css';
import { Analytics } from './component/Analytics';
import { Hero } from './component/Hero';
import { Navbar } from './component/Navbar';
function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Analytics/>
    </>
  );
}

export default App;
