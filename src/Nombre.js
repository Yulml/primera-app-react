import { Fragment } from "react";
import "./Nombre.css";

function Nombre(props) {
  return (
    <>
      <h1 className="brown">{props.nombre}</h1>
      <p style={{ color: props.color }}>{props.saludo}</p>
    </>
  );
}

export default Nombre;
