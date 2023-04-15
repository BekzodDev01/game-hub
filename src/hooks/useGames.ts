import useData from "./useData";

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

const useGames =()=> useData<Game>('/games')

export default useGames;