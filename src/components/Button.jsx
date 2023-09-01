import { Component } from "react"

const styles = {
  button: {
    backgroundColor: "#4CAF50", // Verde
    color: "white", // Texto blanco
    padding: "10px 105px", // Padding alrededor
    border: "none", // Sin bordes
    borderRadius: "5px", // Bordes redondeados
    cursor: "pointer", // Cursor de mano al pasar el ratón
    fontSize: "20px",
  },
}
class Button extends Component {
  render() {
    return <button style={styles.button} {...this.props} />
  }
}

export default Button
