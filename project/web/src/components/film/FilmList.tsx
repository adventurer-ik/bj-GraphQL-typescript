import { useFilmsQuery } from "../../generated/graphql";
import {Box, SimpleGrid, Skeleton} from '@chakra-ui/react';
import FilmCard from './FilmCard'


export default function FilmList(): JSX.Element {
  const {data, loading, error} = useFilmsQuery();

  if (loading) return <p> ...loading </p>
  if (error) return <p>{error.message}</p>

  // return <pre>{JSON.stringify(data, null, 2)}</pre>
  return (
    <SimpleGrid columns={[2, null, 3]} spacing={[2, null, 10]}>
      {loading && new Array(6).fill(0).map((x)=><Skeleton key = {x} height="400px" />)}
      {!loading && data && data.films.map((film) => (
        <Box key={film.id}>
          <FilmCard film = {film} />
        </Box>
      ))}
    </SimpleGrid>
  )
}