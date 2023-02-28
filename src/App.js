import './App.css';
import { Routes,Route} from 'react-router-dom'
import Header from './components/header/Header';
import Home from '../src/pages/home/Home'
import MovieList from '../src/pages/movieList/MoveList'
import Movie from '../src/pages/movieDetail/Movie'

function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
            <Route index element={<Home/>}></Route>
            <Route path="movie/:id" element={<Movie/>}></Route>
            <Route path="movies/:type" element={<MovieList/>}></Route>
            <Route path="/*" element={<h1>Error page</h1>}></Route>
          </Routes>
    </div>
  );
}

export default App;
