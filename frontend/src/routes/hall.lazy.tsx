import { createLazyFileRoute } from "@tanstack/react-router";
import { Hall } from "@frontend/modules/Hall/Hall";

export const Route = createLazyFileRoute("/hall")({
  component: Hall,
});
