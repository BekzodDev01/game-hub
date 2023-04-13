import useGenres from "../hooks/useGenres";

const GenresList = () => {
  const { genres } = useGenres();
  return (
    <ul>
      {genres.map((genre) => (
        <li>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenresList;
