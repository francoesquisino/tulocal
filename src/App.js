import "./App.css";
import NavBar from "./componets/NavBar";
import CartWidget from "./componets/CartWidget";
import ItemListContainer from "./componets/ItemListContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer text={"Bienvenido a Tu Local"} />
    </div>
  );
}

export default App;
