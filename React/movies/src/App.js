import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar' ;
import Banner from './Components/Banner';
import getMovies from './Components/getMovies';
import List from './Components/List';

function App() {
  return (
   <div>
    <Navbar/>
    <Banner/>
    <getMovies/>
    <List/>
   </div>
  );
}

export default App;
