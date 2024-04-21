import React from "react";
import { useParams } from "@tanstack/react-router";

export const Genre: React.FC = () => {
  const { type } = useParams({ from: "/genre/$type" });

  return <div>Genre {type} page</div>;
};
