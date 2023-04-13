import { useState, useEffect } from "react";
import apiClient, {CanceledError} from "../services/api-client";

interface Genre {
    name:string, 
    id:number
}

interface FetchGenreResponse{
    count: number
    results: Genre[]
}


const useGenres =()=> {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setErrors] = useState("");
    const [isloading, setIsloading] = useState(false)
    useEffect(() => {
        const controller = new AbortController();
        setIsloading(true)
        apiClient
        .get<FetchGenreResponse>("/genres", {signal: controller.signal})
        .then((res) => {
          setGenres(res.data.results)
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
    return {genres, error, isloading}
}

export default useGenres