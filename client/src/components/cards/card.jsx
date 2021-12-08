import React from "react";
import { HOST } from "../../settings/settings";
import Cookies from "universal-cookie";
import "./card.css";

const cookies = new Cookies();
const token = cookies.get("_s");
const config = {
  headers: { token: token },
};

function Card() {
  
  const [listcard, setListcard] = React.useState([]);

  React.useEffect(() => {
    //console.log("useEffect");
    cardProducts();
  }, []);

  //llamado  a la API
  const cardProducts = async () => {
    const productos = await fetch(`${HOST}/api/products/`, config);
    const tarjetas = await productos.json();
    //console.log(tarjetas);
    setListcard(tarjetas);
  }

  return (
    <div>
      {listcard.map((card) => (
        <div>
          <div className="card container justify-center align-items-left">
            <div>Producto: {card.name}</div>
            <div>Categoria: {card.category}</div>
            <div>Precio: {card.price}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
