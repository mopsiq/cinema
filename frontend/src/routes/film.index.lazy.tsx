import { createLazyFileRoute } from "@tanstack/react-router";
import { FilmRoot } from "../modules/Film/FilmRoot";

export const Route = createLazyFileRoute("/film/")({
  component: FilmRoot,
});
