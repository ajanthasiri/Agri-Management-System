import './App.css';
import Home from './components/Home.js'

function App() {
  return (
    <div className="App" style={{width:"100%",height:"100vh",position:"absolute"}}>
        <div style={{background:"black", width:"100%",height:"100vh",opacity:0.4,position:"absolute"}}></div>
        <div style={{width:"100%",height:"100vh",position:"absolute",zIndex:2,}}>
          <Home/>
        </div>
        
    </div>
  );
}

export default App;
