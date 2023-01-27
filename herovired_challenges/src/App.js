import './App.css';
import Header from './components/Header';
import Technology from './components/Technology';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="content-ctn">
        <h1>Challenges</h1>
        <div className="cards-body">
          <Technology techTitle="Programming" ></Technology>
        </div>
      </div>
    </div>
  );
}

export default App;
