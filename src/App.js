import logo from './logo.svg';
// import User from './User'
import './App.css';
// import Home from './components/Home';
import HomeContainer from './container/HomeContainer'

function App() {
  return (
    <div className="App">
     <h1>Redux Project</h1>
     {/* <User data={{name:'Abubakar',age:'24'}}/> */}
     {/* <Home/> */}
     <HomeContainer/>
    </div>
  );
}

export default App;
