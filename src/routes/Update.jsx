import { useState } from "react";
import axios from "axios";

  export default function Update() {
  const [Comp, setComp ] = useState([]);
  const [Peri, setPeri] = useState([]);
  const [Impre, setImpre] = useState([])

  
function Computador (id, nome, valor) {
  id = prompt("Insira o id do Computador.")
  nome = prompt("Insira o nome do Computador.")
  valor = prompt("Insira o valor do Produto.")
  axios
    .put("https://json-server-api-resilia-loja-de.onrender.com/computadores/"  + `${id}`, {"id": id, "nome": nome, "valor": valor})
    .then((result) => {
      console.log(result);
      setClientes(result.data);
    })
    .catch((erro) => {
      console.log(erro);
    });
}

function Periferico (id, nome, valor) {
  id = prompt("Insira o id do Periferico.")
  nome = prompt("Insira o nome do Periferico.")
  valor = prompt("Insira o valor do Produto.")
  axios
    .put("https://json-server-api-resilia-loja-de.onrender.com/perifericos/" + `${id}`, {"id": id, "nome": nome, "valor": valor})
    .then((result) => {
      console.log(result);
      setClientes(result.data);
    })
    .catch((erro) => {
      console.log(erro);
    });
}

function Impressora (id, nome, valor) {
  id = prompt("Insira o id da Impressora.")
  nome = prompt("Insira o nome da Impressora.")
  valor = prompt("Insira o valor do Produto.")
  axios
    .post("https://json-server-api-resilia-loja-de.onrender.com/impressoras/" + `${id}`, {"id": id, "nome": nome, "valor": valor})
    .then((result) => {
      console.log(result);
      setClientes(result.data);
    })
    .catch((erro) => {
      console.log(erro);
    });
} 

return (
  <div>
    <button onClick={Computador}>Atualizar Computador</button>
    <button onClick={Periferico}>Atualizar Periférico</button>
    <button onClick={Impressora}>Atualizar Impressora</button>
  </div>
);
}



