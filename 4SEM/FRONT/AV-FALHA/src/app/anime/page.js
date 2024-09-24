'use client'

import { useEffect, useState } from 'react';
import axios from 'axios';
import AnimeTable from '@/app/components/animeTable'; // Importa o componente AnimeTable

export default function AnimeList() {
  const [animes, setAnimes] = useState([]);

  // Chamada para buscar a lista de animes
  useEffect(() => {
    axios.get('https://api.jikan.moe/v4/anime')
      .then(response => setAnimes(response.data.data))
      .catch(error => console.error('Erro ao buscar animes:', error));
  }, []);

  return (
    <div className="container mt-5">
      <h1>Lista de Animes</h1>
      {/* Usa o componente AnimeTable e passa os dados dos animes */}
      <AnimeTable animes={animes} />
    </div>
  );
}
