import MiniGithub from "./Project/MiniGithub";
import Blog from "./Project/Blog/Blog";
import CacheAccess from "./Cache-Access";
import Todo from "./Project/Todo/Todo";
function App() {
  return (
    <div className="App">
      {/*<MiniGithub/>*/}{/* applied manual fetching  */}
      {/* <CacheAccess/> */}
      {/* <Blog/> */}
      <Todo/>
    </div>
  );
}

export default App;
