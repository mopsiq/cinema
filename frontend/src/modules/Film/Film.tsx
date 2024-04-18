import React from "react";
import { useParams } from "@tanstack/react-router";

export const Film: React.FC = () => {
  const { title } = useParams({ from: "/film/$title" });

  return <div>{title} film page</div>;
};
