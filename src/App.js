import "./App.css";
import NavBar from "./componets/NavBar";
import CartWidget from "./componets/CartWidget";
import ItemListContainer from "./componets/ItemListContainer";
import ItemCount from "./componets/ItemCount";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import campera from "./imagenes/campera.jpg";
import pantalon from "./imagenes/pantalon.jpg";

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
        <ItemListContainer text={"Productos"} />
      </div>
      <div className="listProducts">
        <div>
          <ItemCount stock={5} initial={1} title={"Campera"} src={campera} />
        </div>
        <div>
          <ItemCount stock={10} initial={1} title={"Pantalon"} src={pantalon} />
        </div>
      </div>
    </div>
  );
}

export default App;
