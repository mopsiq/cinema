import { createLazyFileRoute } from "@tanstack/react-router";
import { Main } from "@frontend/modules/Main/Main";

export const Route = createLazyFileRoute("/")({
  component: Main,
});
