import React from "react";
import "./carrito.css";
import Product from "./Product";

const Carrito = ({ carrito }) => {
  console.log(carrito);
  return (
    <div className="Carrito">
      <h2>Tu Carrito de compras</h2>
        {carrito.length === 0
          ?
            <p>No hay elementos en el carrito</p>
          : carrito.map((producto) => (
            <Product key={producto.id} 
            producto={producto} />
          ))} 
        
     
    </div>
  );
};

export default Carrito;
