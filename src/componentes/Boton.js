import "../hojas-de-estilos/Boton.css";

function Boton(props) {
  const esOperador = (valor) => {
    //isNaN es un metodo que sirve para saber si una cadena de caracteres no es un número

    //trim metodo que elimina los espacios
    return isNaN(valor) && valor !== "." && valor !== "=";
  };
  return (
    <div
      className={` boton-contenedor ${
        esOperador(props.children) ? "operador" : ""
      }`.trimEnd()}
    >
      {props.children}
    </div>
  );
}

export default Boton;
