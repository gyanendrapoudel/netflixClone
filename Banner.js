import { useEffect, useState } from 'react'
import  './Banner.css'
import axios from './axios';
import requests from './Request';
const Banner = () => {
    const [movie, setMovie] = useState([]);
    
    useEffect(()=>{
        const fetchData = async()=>{
           const resp = await axios.get(requests.fetchNetflixOriginals) ;
           setMovie(
            resp.data.results[
                Math.floor(Math.random()* resp.data.results.length-1)
            ]
           )
          
           return resp;
           
        }
         fetchData();
    },[])
   console.log(movie);

    const truncate=(string)=>{
     if(string?.length>150){
        return string.slice(0,150).concat('...')
     }
     return string;
    }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
        // backgroundImage: `url('https://i.imgur.com/e1hLQ2m.png')`,
        backgroundPosition: 'center center',
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
            {movie?.title || movie?.name||movie?.original_name}
            </h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">
          {truncate(movie?.overview)}
        </h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  )
}
export default Banner