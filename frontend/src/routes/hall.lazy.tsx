import { createLazyFileRoute } from "@tanstack/react-router";
import { Hall } from "../modules/Hall/Hall";

export const Route = createLazyFileRoute("/hall")({
  component: Hall,
});
