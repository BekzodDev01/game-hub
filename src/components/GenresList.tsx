import useData from "../hooks/useData";
import useGenres from "../hooks/useGenres";
import { Genre } from "../hooks/useGenres";
const GenresList = () => {
  const { data } = useGenres();
  return (
    <ul>
      {data.map((genre) => (
        <li>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenresList;
