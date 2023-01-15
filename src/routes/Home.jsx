import {useState, useEffect} from "react";
import Api from "../axios/config";
import "./css/Home.css"


const Home = () => {

  const [posts, setPosts ] = useState([]);
  const [Peri, setPeri] = useState([]);
  const [Impre, setImpre] = useState([])
  const getPosts = async() => {
    
     try{
    const response = await Api.get("/computadores")
    const response1 = await Api.get("/Perifericos")
    const responce2 = await Api.get("/Impressoras")
    const data = response.data
    const data1 = response1.data
    const data2 = responce2.data

    setPosts(data)
    setPeri(data1)
    setImpre(data2)
    console.log(data)
    console.log(data1)
    console.log(data2)
  }
  catch(error){ console.log(error)}
} 

useEffect(()=>{
 getPosts()
},[] )

return <div >
  <h1>Computadores</h1>
  <div className="computadores">
   
  {posts.length === 0 ? (<p>Carregando...</p>) : (posts.map((posts) => (
    <div className="compu" key={posts.id}>
      <img className="imgs" src={posts.imagem} />
     <h2>{posts.nome}</h2>
    </div>
  )))}</div>
  <div>
    <h1>Perifericos</h1>
    <div className="perifericos">
   
   {Peri.length === 0 ? (<p>Carregando...</p>) : (Peri.map((peri) => (
     <div className="peri" key={peri.id}>
       <img className="imgs" src={peri.imagem} />
      <h2>{peri.nome}</h2>
     </div>
   )))}</div>
  </div>
  <div>
    <h1>Impressoras</h1>
    <div className="impressoras">
   
   {Impre.length === 0 ? (<p>Carregando...</p>) : (Impre.map((Impre) => (
     <div className="impre" key={Impre.id}>
       <img className="imgs" src={Impre.imagem} />
      <h2>{Impre.nome}</h2>
     </div>
   )))}</div>
  </div>
  </div>


 

}



export default  Home





//     .then(response => {
//     const data = response.data
//     console.log(data)
//     document.getElementById('im').setAttribute('src',data);
//     return(
//           <img  />,
//           <h2 id="nome"></h2>,
//           <h3 id="id"></h3>,
//           <SaibaMais />
      
        
//         );

//     }
//     .catch((erro) => {console.log(erro)})
// }

