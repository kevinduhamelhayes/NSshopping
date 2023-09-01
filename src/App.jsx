import React from "react";
import Productos from "./components/Productos";
import Navbar from "./components/Navbar";
import Layout from "./components/Layout";

class App extends React.Component {
  state = {
    productos: [
      { name: "tomate", price: 2.5, img: "/tomate.jpg" },
      { name: "arbejas", price: 1.5, img: "/arbejas.jpg" },
      { name: "lechuga", price: 1.5, img: "/lechuga.jpg" },
    ],
  };

  render() {
    return (
      <div>
        <Navbar />
        <Layout>
          <Productos
            agregarAlCarro={() => console.log("agregado al carro")}
            productos={this.state.productos}
          />
        </Layout>
      </div>
    );
  }
}

export default App;
