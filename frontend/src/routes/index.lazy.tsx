import { createLazyFileRoute } from "@tanstack/react-router";
import { Main } from "../modules/Main/Main";

export const Route = createLazyFileRoute("/")({
  component: Main,
});
