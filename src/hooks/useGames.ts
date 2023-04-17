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

const useGames =(selectedGenre: Genre | null)=> useData<Game>('/games', {params:{genres: selectedGenre?.id}}, [selectedGenre?.id])

export default useGames;