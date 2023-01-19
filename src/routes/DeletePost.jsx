import { useState } from "react";
import axios from "axios";

export default function DeleteProdutos() {
  const [Comp, Computadores] = useState([]);
  const [Peri, Perifericos] = useState([]);
  const [Imp, Impressoras] = useState([]);

function delComp(idComp) {
    idComp = prompt("Insira o id do Computador que deseja deletar.")
    axios
      .delete("https://json-server-api-resilia-loja-de.onrender.com/computadores/" + idComp)
      .then((result) => {
        console.log(result);
        setClientes(result.data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }
function delPeri(idPeri) {
    idPeri = prompt("Insira o id do Periférico que deseja deletar.")
    axios
      .delete("https://json-server-api-resilia-loja-de.onrender.com/perifericos/" + idPeri)
      .then((result) => {
        console.log(result);
        setFuncionarios(result.data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }
function delImp(idImp) {
    idImp = prompt("Insira o id da Impressora que deseja deletar.")
    axios
      .delete("https://json-server-api-resilia-loja-de.onrender.com/impressoras/" + idImp)
      .then((result) => {
        console.log(result);
        setHospedagens(result.data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }
  return (
    <div>
      <button onClick={delComp}>Deletar Computador</button>
      <button onClick={delPeri}>Deletar Periférico</button>
      <button onClick={delImp}>Deletar Impressora</button>
    </div>
  );
}