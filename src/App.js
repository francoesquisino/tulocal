import "./App.css";
import NavBar from "./componets/NavBar";
import ItemListContainer from "./componets/ItemListContainer";
function App() {
  return (
    <div className="container-fluid">
      <div className="div1">
        <div className="divA">
          <h2>TU LOCAL</h2>
        </div>
        <div className="divB">
          <NavBar />
        </div>
      </div>
      <div>
        <ItemListContainer />
      </div>
      <div className="listProducts"></div>
    </div>
  );
}

export default App;
