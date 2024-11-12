import logo from './logo.svg';
import './App.css';
import SaludarComponente from './componentes/SaludarComponente';
import { TercerComponente } from './componentes/TercerComponente';
import { MiPrimerEstado } from './componentes/MiPrimerEstado';
import MiSegundoEstado from './componentes/MiSegundoEstado';
import ContadorEstado from './componentes/ContadorEstado';
import ListaEstado from './componentes/ListaEstado';

function App() {
  const fichaMedica={grupoSanguineo:'A', alergia: 'Ninguna'}
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <SaludarComponente name='Erick'></SaludarComponente>
        <TercerComponente name='Erick' lastName='Ruiz' ficha={fichaMedica}></TercerComponente>
        <MiPrimerEstado></MiPrimerEstado>
        <MiSegundoEstado></MiSegundoEstado>
        <ContadorEstado></ContadorEstado>
        <ListaEstado></ListaEstado>
      </header>
    </div>
  );
}

export default App;
