import { useQuery, UseQueryResult } from "react-query";
import apiService from "@app/services/apiService";

import type { RoundDetails, Rounds } from "@app/types";

interface UseRoundsData {
  getRoundById: (roundId: number) => UseQueryResult<RoundDetails, Error>;
  getAllRounds: () => UseQueryResult<Rounds[], Error>;
}

const useRoundsData = (): UseRoundsData => {
  const getRoundById = (roundId: number) => {
    return useQuery<RoundDetails, Error>(["rounds", roundId], () =>
      apiService.getRoundById(roundId)
    );
  };

  const getAllRounds = () => {
    return useQuery<Rounds[], Error>(["rounds"], apiService.getRounds);
  };

  return { getRoundById, getAllRounds };
};

export { useRoundsData };
