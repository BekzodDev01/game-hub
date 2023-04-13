import  { useEffect, useState } from "react";
import apiClient, {CanceledError}   from "../services/api-client";

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
interface FetchGamesResponse {
  count: number;
  results: Game[];
}
const useGames =()=> {
        const [games, setGames] = useState<Game[]>([]);
        const [error, setErrors] = useState("");
        const [isloading, setIsloading] = useState(false)
        useEffect(() => {
            const controller = new AbortController();
            setIsloading(true)
            apiClient
            .get<FetchGamesResponse>("/games", {signal: controller.signal})
            .then((res) => {
              setGames(res.data.results)
              setIsloading(false)
            })
            .catch((err) =>{
                 if(err instanceof CanceledError) return;
                 setErrors(err.message)
                  setIsloading(false)
                }
                );


                return ()=> controller.abort()
            }, []);
        return {games, error, isloading}
}

export default useGames;