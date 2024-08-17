import axios from 'axios';
import type { Rounds, RoundDetails } from '@app/types';

const BASE_URL = 'https://60f7b35b9cdca00017454f5e.mockapi.io/api/v1/rounds';
const ROUND_BY_ID_URL = 'https://60f7b35b9cdca00017454f5e.mockapi.io/api/v1/round'

const apiService = {
  getRounds(): Promise<Rounds[]> {
    return axios.get<Rounds[]>(BASE_URL).then(res => res.data);
  },
  getRoundById(itemId: number): Promise<RoundDetails> {
    return axios.get<RoundDetails>(`${ROUND_BY_ID_URL}/${itemId}`).then(res => res.data);
  }
};

export default apiService;