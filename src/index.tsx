import type { FC } from 'react';
import { createRoot } from 'react-dom/client';

import Game from '@app/components/Game';

const App: FC = () => {
  return <Game />
};

const container = document.getElementById('root');
const root = createRoot(container as HTMLElement);
root.render(<App />);