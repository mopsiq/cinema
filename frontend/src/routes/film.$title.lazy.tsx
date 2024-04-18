import { createLazyFileRoute } from "@tanstack/react-router";
import { Film } from "../modules/Film/Film";

export const Route = createLazyFileRoute("/film/$title")({
  component: Film,
});
