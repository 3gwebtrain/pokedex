import { Button, List, ListItem } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import { usePokemonDetailQuery } from "./../../api";

const listFormatter = new Intl.ListFormat("en-GB", {
  style: "short",
  type: "conjunction",
});

export default function (): React.ReactNode {
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

        <article style={{ padding: "1rem" }}>
          <Typography
            variant="h1"
            component="h2"
          >
            {data.name}
          </Typography>
          <img
            src={data.sprites.front_default}
            alt={data.name}
            style={{ maxWidth: "100%", width: "20%" }}
          />
          <List>
            <ListItem>
              <Typography variant="h4">ID: {data.id}</Typography>
            </ListItem>
            <ListItem>
              <Typography variant="h4">Height: {data.height}</Typography>
            </ListItem>
            <ListItem>
              <Typography variant="h4">{listFormatter.format(data.types.map((item: any) => item.type.name))}</Typography>
            </ListItem>
          </List>
        </article>
      </>
    );
  }
}
