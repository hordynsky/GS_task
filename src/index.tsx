import type { FC } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClientProvider } from 'react-query';

import { queryClient } from '@app/services/queryClient';
import Game from '@app/components/Game';

import './app.less';

const App: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Game />
      </div>
    </QueryClientProvider>
  )
};

const container = document.getElementById('root');
const root = createRoot(container as HTMLElement);
root.render(<App />);