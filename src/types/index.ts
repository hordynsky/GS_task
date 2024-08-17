import type { UseQueryResult } from 'react-query';

interface Rounds {
  dateTime: number;
  roundId: number;
}

interface RoundDetails {
  items: string;
  height: string;
  id: string;
}

type UseItemQueryResult = UseQueryResult<RoundDetails, Error>;

export type { Rounds, RoundDetails, UseItemQueryResult };