
import Tarefas from './pages/Tarefas';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import Inicial from './pages/Inicial';
import Sobre from './pages/Sobre';
import Heroi from './pages/Herois';
import Login from './pages/Login';
import PrivateRoute from './components/PrivateRoute';
import NotFound from './pages/NotFound';



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
        <Route path='/tarefas' element={<PrivateRoute><Tarefas /></PrivateRoute>} />
        <Route path='/sobre' element={<Sobre />} />
        <Route path='/heroi/:heroiId' element={<Heroi />} />
        <Route path='/login' element={<Login />} />'
        <Route path='*' element={<NotFound />} />
      </Routes>
    </HashRouter>
  )
}

export default App;
