import { useState, useEffect } from "react";
import apiClient, {CanceledError} from "../services/api-client";
import { AxiosRequestConfig } from "axios";

interface FetchResponse<T>{
    count: number
    results: T[]
}

const useData =<T>(endpoint:string, requestConfig?: AxiosRequestConfig, deps?:any[])=> {
    const [data, setData] = useState<T[]>([]);
    const [error, setErrors] = useState("");
    const [isloading, setIsloading] = useState(false)
    useEffect(() => {
        const controller = new AbortController();
        setIsloading(true)
        apiClient
        .get<FetchResponse<T>>(endpoint, {signal: controller.signal, ...requestConfig})
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
        }, deps ? [...deps]: []);
    return {data, error, isloading}
}

export default useData