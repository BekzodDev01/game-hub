import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface Game {
  name: string;
  id: number;
}
interface FetchGames {
  count: number;
  results: Game[];
}

const GamesGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setErrors] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchGames>("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => setErrors(err.message));
  }, []);
  return (
    <>
      {error && <p>{error}</p>}

      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GamesGrid;
