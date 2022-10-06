import MiniGithub from "./Project/MiniGithub";
import Blog from "./Project/Blog/Blog";
import CacheAccess from "./Cache-Access";
function App() {
  return (
    <div className="App">
      {/*<MiniGithub/>*/}{/* applied manual fetching  */}
      <CacheAccess/>
      <Blog/>
    </div>
  );
}

export default App;
