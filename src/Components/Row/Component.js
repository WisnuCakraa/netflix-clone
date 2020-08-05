import React, {useState, useEffect} from 'react';
import { BASE_URL } from '../../Utils/Common'
import axios from '../../Utils/Common/axios';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer'
import './styles.css'

export default function Component({ title, fetchUrl, isLargeRow}) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('')

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results)
      return request
    }
    fetchData();
  }, [])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1
    }
  }

  const handleClickTrailer = (movie) => {
    console.log(movie);
    if (trailerUrl) {
      setTrailerUrl('')
    } else {
      movieTrailer(movie.name || '')
      .then((url) => {
        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParams.get('v'))
      })
      .catch((err) => console.log(err));
    }
  }

  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className='row__posters'>
        {movies.map(movie => (
          <img
            key={movie.id}
            onClick={() => handleClickTrailer(movie)} 
            className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
            src={`${BASE_URL}${movie.poster_path}`} 
            alt={movie.name}/>
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
    </div>
  )
}

//in useEffect : 
  // if [movies] akan terpanggil lagi jika ada perubahan data movie
  // if [], berjalan sekali saat dimuat, dan tidak akan dijalankan lagi