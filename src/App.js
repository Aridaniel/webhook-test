import webhook1 from './images.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h2>
          Webhoook testing 
        </h2>
        <img src={webhook1} alt='hookimage' />
      <p>So everytime you push new code to github, Netlifly will rebuild with the new webhook </p>
   
      </header>
    </div>
  );
}

export default App;
