import React from "react"
import Productos from "./components/Productos"

class App extends React.Component {
  state = {
    productos: [
      { name: "tomate", price: 2.5, img: "./public/tomate.jpg" },
      { name: "arbejas", price: 1.5, img: "./public/arbejas.jpg" },
      { name: "lechuga", price: 1.5, img: "./public/lechuga.jpg" },
    ],
  }

  render() {
    return (
      <div>
        <Productos
          agregarAlCarro={() => console.log("agregado al carro")}
          productos={this.state.productos}
        />
      </div>
    )
  }
}

export default App
