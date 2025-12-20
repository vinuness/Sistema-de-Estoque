import PaginaPrincipal from './pagPrincipal/index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PagRelatorio from './pagRelatorio/relatorio';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<PaginaPrincipal/>} />
        <Route exact path='/relatorio' element={<PagRelatorio/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
