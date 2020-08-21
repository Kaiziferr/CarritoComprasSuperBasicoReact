import React, {Fragment,useState} from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Product from './components/Product'
import Carrito from './components/Carrito'

function App() {

  const dateAct = new Date().getFullYear();
  
  //Create list of the products
  const [products, setProducts] = useState([
    {id:1, nombre: "Camisa A", precio: 50},
    {id:2, nombre: "Camisa B", precio: 40},
    {id:3, nombre: "Camisa C", precio: 30},
    {id:4, nombre: "Camisa D", precio: 20}
  ])

  //State for a car of store
  const [carrito, addProduct] = useState([])

  return (
    <Fragment>
      <Header 
        tittle = 'Tienda virtual'
        />
      
      <h1>List of product</h1>
      {products.map( producto => (
        <Product 
          key = {producto.id}
          producto = {producto}
          products = {products}
          carrito = {carrito}
          addProduct = {addProduct}
        />
      ))}
      <Carrito
        carrito = {carrito}
      />
      <Footer 
        dateAct = {dateAct}
      />
    </Fragment>
  );
}

export default App;
