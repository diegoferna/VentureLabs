import './App.css';
import Content from './Components/Content';
import Top from './Components/Top';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ContentRegister from './Components/ContentRegister';
import ListarClient from './Components/Main/ListarClient';
import {GlobalStorage} from './Components/Api/UserContext'

function App() {
  fetch('http://localhost:3000/users')
          .then(response => console.log(response.json()))


  return (

    
    <div className="App">
      
            <GlobalStorage>
              <BrowserRouter>
                <Top/>
                <Routes>
                    <Route path="/" element={<Content/>}/>
                    <Route path="cadastro" element={<ContentRegister/>}/>
                    <Route path="/clientes" element={<ListarClient/>}/>
                </Routes>
              </BrowserRouter>
            </GlobalStorage>
    </div>
  );
}

export default App;
