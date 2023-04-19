import { GameQuery } from "../App";
import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
    id: number, 
    name: String, 
    slug: string
}

export interface Game {
  name: string;
  id: number;
  background_image: string, 
  parent_platforms:{platform: Platform}[]	
  metacritic: number  
}

const useGames =(gameQuery: GameQuery)=> 
useData<Game>('/games', 
{params:
  {genres: gameQuery.genre?.id, 
  parent_platforms: gameQuery.platform?.id,
  ordering: gameQuery.sortOrder 
  }}, [gameQuery])

export default useGames;