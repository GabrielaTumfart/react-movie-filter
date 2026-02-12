import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {
  const movies = [
    { title: "Inception", genre: "Fantascienza" },
    { title: "Il Padrino", genre: "Thriller" },
    { title: "Titanic", genre: "Romantico" },
    { title: "Batman", genre: "Azione" },
    { title: "Interstellar", genre: "Fantascienza" },
    { title: "Pulp Fiction", genre: "Thriller" },
  ];


  




  

  return (
    <div>
     
      <h1>React Movie Filter</h1>

      <select>

        <option value="">Tutti i genere</option>
        <option value="Fantascienza">Fantascienza</option>
        <option value="Thriller">Thriller</option>
        <option value="Romantico">Romantico</option>
        <option value="Azione">Azione</option>
      </select>

      <ul>
      {movies.map((movie, index) => (

          <li key={index}>
            {movie.title} - {movie.genre}
          </li>
        ))}



      </ul>
     
       
      </div>
  )
}

 
