import {useState, useEffect} from "react";
import Api from "../../axios/config";


const Minfo = () => {

  const [posts, setPosts ] = useState([]);
  
  const getInf = async() => {
    
     try{
    const response = await Api.get("/computadores")
    const data = response.data
    

    setPosts(data)
      console.log(data)
  }
  catch(error){ console.log(error)}
} 


useEffect(() => {
  Api
    .post("https://json-server-api-resilia-loja-de.onrender.com/computadores/5",{
          nome: 'Romulo',
          sobrenome: 'Sous'
})
    .then((response) => setUser(response.data))
    .catch((err) => {
      console.error("ops! ocorreu um erro" + err);
    });
}, []);

useEffect(()=>{
 getInf()
},[] )

return <div >
<h1>Computadores</h1>
<div className="computadores">
 
{posts.length === 0 ? (<p>Carregando...</p>) : (posts.map((posts) => (
    <div className="compu" key={posts.id}>
      <h1>{posts.id}</h1>
     <h2>{posts.processador}</h2>
     <h2>{posts.PlacaDeVideo}</h2>
     <h2>{posts.PlacaMae}</h2>
     <h2>{posts.MemoriaRam}</h2>
     <h2>{posts.ssd}</h2>
    </div>
    
  )))}</div>
 
  </div>


 

}



export default  Minfo