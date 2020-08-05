import React from 'react';
import Row from './Components/Row';
import Banner from './Components/Banner'
import Nav from './Components/NavBar'
import requests from './Utils/fetch/request';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
     <Banner fetchUrl={requests.fetchNetflixOriginals}/>
     <Row 
        title='NETFLIX ORIGINALS' 
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
        />
     <Row title='Trending Now' fetchUrl={requests.fetchTrending}/>
     <Row title='Top Rated' fetchUrl={requests.fetchTopRated}/>
     <Row title='Action Movies' fetchUrl={requests.fetchActionMovies}/>
     <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies}/>
     <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies}/>
     <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies}/>
     <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
