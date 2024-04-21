import { createLazyFileRoute } from "@tanstack/react-router";
import { Genre } from "@frontend/modules/Genre/Genre";

export const Route = createLazyFileRoute("/genre/$type")({
  component: Genre,
});
