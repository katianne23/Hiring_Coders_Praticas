import './App.css';
import Cards from './components/cards';

function App() {
  return (
    <div className="App">
      <h1>Favorite seus personagens!</h1>
      <Cards key={'key'} />
    </div>
  );
}

export default App;
