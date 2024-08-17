import type { FC } from 'react';

import RoundsTable from '@app/components/RoundsTable'; 

import './game.less';

const Game: FC = () => {
  return (
    <div className="game">
      <RoundsTable />
    </div>
  );
};

export default Game;