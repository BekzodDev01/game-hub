import useData from "./useData";

interface Platform {
  name: string;
  id: number;
  slug: string;
}

const usePlatform =()=>  useData<Platform>("platforms/lists/parents");

export default usePlatform;
