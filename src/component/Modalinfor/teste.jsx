// import {useState, useEffect} from "react";
// import api from "../../axios/config";


// useEffect(() => {
//   api
//     .post("https://json-server-api-resilia-loja-de.onrender.com/computadores",{
//           nome: 'Romulo',
//           sobrenome: 'Sous'
// })
//     .then((response) => setUser(response.data))
//     .catch((err) => {
//       console.error("ops! ocorreu um erro" + err);
//     });
// }, []);



import Api from "../axios/config"
import { userState} from "react"
import {useState, useEffect} from "react";
import "./css/NewPost.css"

const NewPost = () => {
  return (
    <div className='new'>
      <h2>Inserir novo produto</h2>
      <form>
        <div className='form-control'>
          <label htmlFor="title">Produto</label>
          <input type="text" name='title' placeholder='Digite o titulo' />
        </div>
      </form>
    </div>
  )
}
