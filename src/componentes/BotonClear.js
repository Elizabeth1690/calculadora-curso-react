import "../hojas-de-estilos/BotonClear.css";

const BotonClear = (props) => {
  return <div className="boton-clear">{props.children}</div>;
};

export default BotonClear;