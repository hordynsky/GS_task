import { useQuery } from 'react-query';
import apiService from '@app/services/apiService';

import type { RoundDetails, UseItemQueryResult } from '@app/types';

const useRoundsData = (roundId: number): UseItemQueryResult => 
    useQuery<RoundDetails, Error>(['rounds', roundId], () => apiService.getRoundById(roundId));

export { useRoundsData };