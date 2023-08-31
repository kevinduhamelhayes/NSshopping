import { Component } from "react"
import React from "react"
//import Productos from "./components/Productos"

class Productos extends Component {
  render() {
    const { productos, agregarAlCarro } = this.props
    return (
      <div>
        {productos.map((producto) => (
          <div key={producto.name}>
            <img src={producto.img} alt={producto.name} />
            <h3>{producto.name}</h3>
            <p>{producto.price}</p>
            <button onClick={agregarAlCarro}>Agregar al carro</button>
          </div>
        ))}
      </div>
    )
  }
}
export default Productos
