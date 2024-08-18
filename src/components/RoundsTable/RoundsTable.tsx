import { useState } from "react";
import type { FC } from "react";

import { useRoundsData } from "@app/hooks/useRoundsData";
import { formatDate } from "@app/utils/timeUtils";
import Round from "@app/components/Round";
import useLoadingAndError from '@app/hooks/useLoadingAndError';

import "./roundsTable.less";

const RoundsTable: FC = () => {
  const { getAllRounds } = useRoundsData();
  const { data, error, isLoading } = getAllRounds();
  const [expandedRow, setExpandedRow] = useState<number[]>([]);

  const loadingOrErrorComponent = useLoadingAndError({error, isLoading});

  if (loadingOrErrorComponent) return loadingOrErrorComponent;

  const toggleRow = (roundId: number): void => {
    if (expandedRow.includes(roundId)) {
      setExpandedRow((rows) => rows.filter((rowId) => rowId !== roundId));
    } else {
      setExpandedRow((rows) => [...rows, roundId]);
    }
  };

  return (
    <table className="rounds-table">
      <thead>
        <tr>
          <th>Rounds</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {data?.map(({ roundId, dateTime }) => (
          <>
            <tr key={roundId} onClick={() => toggleRow(roundId)}>
              <td>{roundId}</td>
              <td>{formatDate(dateTime)}</td>
            </tr>
            {expandedRow.includes(roundId) && (
              <tr>
                <td colSpan={2} className="rounds-table__round-container">
                  <Round roundId={roundId} />
                </td>
              </tr>
            )}
          </>
        ))}
      </tbody>
    </table>
  );
};

export default RoundsTable;
