import type { FC } from 'react';

import { useRoundsData } from '@app/hooks/useRoundsData';

interface GameProps {
  roundId: number;
}

const Game: FC<GameProps> = ({roundId}) => {
  const { data: roundDetails, error, isLoading } = useRoundsData(roundId);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Item Details</h1>
      <p>Items: {roundDetails?.items}</p>
      <p>Height: {roundDetails?.height}</p>
      <p>ID: {roundDetails?.id}</p>
    </div>
  );
};

export default Game;