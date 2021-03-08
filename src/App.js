import webhook from './images.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h2>
          Webhoook testing 
        </h2>
        <img src={webhook}  />
        <img src={webhook}  />
      <p>push to github and it will tell you</p>
   
      </header>
    </div>
  );
}

export default App;
