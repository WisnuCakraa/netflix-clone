import React, { useState, useEffect } from 'react';
import { BASE_URL } from '../../Utils/Common'
import axios from '../../Utils/Common/axios';
import './styles.css'

export default function Component({fetchUrl}) {
  const [background, setBackground] = useState([]);
  const {
    backdrop_path = "",
    name = "",
    overview = '',
  } = background;
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setBackground(request.data.results[
        Math.floor(Math.random() * request.data.results.length - 1)
      ]);
      return request
    }
    fetchData();
  }, [])
  console.log(background);

  function truncate(str, n) {
    return str.length > n ? str.substr(0, n - 1) + '...' : str;
  }

  return (
    <header 
      className='banner'
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${BASE_URL}${backdrop_path})`,
        backgroundPosition: 'center center',
      }}
    >
      <div className='banner__contents'>
        <h1 className="banner__title">{name}</h1>
        <div className='banner__buttons'>
          <button className='banner__button'>Play</button>
          <button className='banner__button'>My List</button>
        </div>
        <h1 className='banner__description'>
          {truncate(overview, 250)}
        </h1>
      </div>

      <div className="banner--fadeBottom"/>
    </header>
  )
}