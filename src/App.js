import {useState, useEffect} from 'react'


import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';


const App = ()=>{
const [movies, setMovies]= useState([]);
const [searchTerm, setSearchTerm] = useState('');
const API_URL = 'http://www.omdbapi.com?apikey=23b2035f'
const searchMovies = async(title)=>{
const response = await fetch(`${API_URL}&s=${title}`);
const data = await response.json();
  console.log(data.Search);
    setMovies(data.Search);
    }

useEffect(()=>{
    searchMovies('Marvel')
    },[]);
    return (
<div className="app">
    <h1>MovieLand</h1>

    <div className="search">
        <input placeholder='Search for Movies' name="" id="" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} />
        <img src={SearchIcon} alt="search"  onClick={()=>searchMovies(searchTerm)}
        />
    </div>

{
    movies?.length >0
    ? (
        <div className="container">
    {movies.map((movie)=>(
        <MovieCard movie = {movie}/>
    ))}
     {/* <MovieCard movie = {movie}/> */}
    </div>
    ): (
        <div className="empty">
            <h2>No Movies Found.</h2>
        </div>
    )
}


</div>

    );
}

export default App;