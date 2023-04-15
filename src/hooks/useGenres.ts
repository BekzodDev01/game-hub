import useData from "./useData";

export interface Genre {
    name:string, 
    id:number, 
    image_background: string
}

const useGenres =()=> useData<Genre>('/genres')

export default useGenres