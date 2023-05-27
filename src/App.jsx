
import './App.css'
import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
    
    <BrowserRouter>
    <div className="container-fluid">
      <NavBar/>
        <Routes>
          <Route path='/' element={ <ItemListContainer/> } />
          <Route path='/categoria/:idCategoria' element={ <ItemListContainer/> }/>
          <Route path='/item/:idItem' element = { <ItemDetailContainer/> } />
        </Routes>
    </div>
    </BrowserRouter>
    </>
  )
}

export default App
