import axios from "axios";

const Api = axios.create({
  baseURL:"https://json-server-api-resilia-loja-de.onrender.com"
})
export default Api