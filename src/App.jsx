import Home from "./routes/Home"
// import Navibar from "./component/Navibar"
// import Footer from "./component/Footer"
import NewPost from "./routes/NewPost"
import DeleteProdutos from "./routes/DeletePost"
import Update from "./routes/Update"
import './button/style.css'
function App() {
  return (
    <div className="App">

    <Home />
    <NewPost  />  
   <DeleteProdutos/> 
   <Update/>
    </div>
  )
}

export default App
