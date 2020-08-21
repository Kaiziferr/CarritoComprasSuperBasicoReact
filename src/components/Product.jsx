import React from "react";

const Product = ({ producto, products, carrito, addProduct }) => {
  const { nombre, precio, id } = producto;
  //Agregar producto al carrito
  const selectionProduct = (id) => {
    console.log("Hola", id);
    const productoSelection = products.filter((producto) => producto.id === id)[0];
    addProduct([...carrito, productoSelection]);
  };

  return (
    <div>
      <p>{nombre}</p>
      <p>${precio}</p>
      <button type="button" onClick={() => selectionProduct(id)}>
        Agregar
      </button>
    </div>
  );
};
export default Product;
