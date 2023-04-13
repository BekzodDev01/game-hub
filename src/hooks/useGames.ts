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

}
interface FetchGames {
  count: number;
  results: Game[];
}
const useGames =()=> {
        const [games, setGames] = useState<Game[]>([]);
        const [error, setErrors] = useState("");
        useEffect(() => {
            const controller = new AbortController();
          apiClient
            .get<FetchGames>("/games", {signal: controller.signal})
            .then((res) => setGames(res.data.results ))
            .catch((err) =>{
                 if(err instanceof CanceledError) return;
                 setErrors(err.message)}
                );


                return ()=> controller.abort()
            }, []);
        return {games, error}
}

export default useGames;