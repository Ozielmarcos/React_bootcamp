
import Tarefas from './pages/Tarefas';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import Inicial from './pages/Inicial';
import Sobre from './pages/Sobre';
import Heroi from './pages/Herois';


function App() {

  return (
    <HashRouter>
      <ul>
        <li><Link to='/'>Inicial</Link></li>
        <li><Link to='/tarefas'>Tarefas</Link></li>
        <li><Link to='/sobre'>Sobre</Link></li>
        <li><Link to='/heroi/Doutor Estranho'>Doutor Estranho</Link></li>
        <li><Link to='/heroi/Capitão América'>Capitão América</Link></li>
        <li><Link to='/heroi/Homem Aranha'>Spider-Man</Link></li>
      </ul>
      <Routes>
        <Route path='/' element={<Inicial />} />
        <Route path='/tarefas' element={<Tarefas />} />
        <Route path='/sobre' element={<Sobre />} />
        <Route path='/heroi/:heroiId' element={<Heroi />} />
      </Routes>
    </HashRouter>
  )
}

export default App;
