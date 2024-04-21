import { createLazyFileRoute } from "@tanstack/react-router";
import { GenreRoot } from "@frontend/modules/Genre/GenreRoot";

export const Route = createLazyFileRoute("/genre/")({
  component: GenreRoot,
});
