import logo from "./logo.svg";
import "./App.css";
import Music from "./Component/Music Section/Music";
import Graphics from "./Component/Graphics/Graphics";
import Modelling from "./Component/Modelling/Modelling";

function App() {
  return (
    <div className="App">
      <h1>Hello! I'm Dipto Ehsan</h1>
      <h2>I do</h2>
      <Music></Music>
      <Modelling></Modelling>
      <Graphics></Graphics>
    </div>
  );
}

export default App;
