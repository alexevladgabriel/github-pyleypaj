import type { MetaArgs } from "react-router";
import type { Route } from "./+types/game";

export const gamesData = ["minecraft-server", "cs2-server"];

export function meta({ data: game }: MetaArgs) {
  return [
    {
      title: `${game} Server Hosting`,
    },
  ];
}

export async function loader({ params }: Route.LoaderArgs) {
  const current = gamesData.find((game) => game === params.gameId);

  if (!current) {
    return null;
  }

  return current;
}

export function Game({}) {}
