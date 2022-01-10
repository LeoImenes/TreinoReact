import "./App.css";
import Evento from './components/Evento'
import Form from './components/Form'

function App() {
  const nome = "Jose"
return (
    <div className="App">
      <h1>Ola mundo</h1>
      <Evento/>
      <Form/>
    </div>
  );
}

export default App;
