import Contador from './components/Contador'

function App() {
  return (
    <div>
      Hola Mundo
      <Contador increment={5} initial={0} />
      <Contador increment={1} initial={20} />
      <Contador increment={2} initial={15} />
      <Contador increment={-1} initial={-3} />
    </div>

  );
}

export default App;
