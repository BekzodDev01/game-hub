import { useState, useEffect } from "react";
import apiClient, {CanceledError} from "../services/api-client";

interface FetchResponse<T>{
    count: number
    results: T[]
}

const useData =<T>(endpoint:string)=> {
    const [data, setData] = useState<T[]>([]);
    const [error, setErrors] = useState("");
    const [isloading, setIsloading] = useState(false)
    useEffect(() => {
        const controller = new AbortController();
        setIsloading(true)
        apiClient
        .get<FetchResponse<T>>(endpoint, {signal: controller.signal})
        .then((res) => {
          setData(res.data.results)
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
    return {data, error, isloading}
}

export default useData