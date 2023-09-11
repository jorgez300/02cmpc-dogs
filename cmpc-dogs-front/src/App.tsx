import { FunctionComponent } from 'react';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Tabla from './dogs/components/tabla.component';
import Formulario from './dogs/components/formulario.component';

interface Props {

}

const App: FunctionComponent<Props> = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Tabla />} />
        <Route path='/Form' >
          <Route index element={<Formulario />} />
          <Route path=':number' element={ <Formulario />} />
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App;
