import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import { Store } from './pages/Store';
import { Index } from './pages/Index';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element = {<Index/>}/>
        <Route path='Inicio' element = {<Index/>}/>
        <Route path='Tienda' element = {<Store title="Bienvenido a mi tienda, sitio en construccion"/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
