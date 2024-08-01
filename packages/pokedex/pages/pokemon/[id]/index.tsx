import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import { PokemonDetails } from "components";
import { useRouter } from "next/router";
import { usePokemonDetailQuery } from "./../../api";

export default function PokemonDetail(): React.ReactNode {
  const router = useRouter();
  const { id } = router.query;
  const { isLoading, isError, isSuccess, data } = usePokemonDetailQuery({
    name: id,
  });

  if (isLoading) {
    return <p>loading, please wait</p>;
  }

  if (isError) {
    return <p>something went wrong</p>;
  }

  if (isSuccess) {
    return (
      <>
        <Button
          type="button"
          variant="contained"
          onClick={(): void => router.back()}
        >
          Go back to Pokemons List
        </Button>

        <Typography
          variant="h1"
          component="h2"
        >
          {data.name}
        </Typography>

        <PokemonDetails data={data} />
      </>
    );
  }
}
