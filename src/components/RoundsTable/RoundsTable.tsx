import { useState } from "react";
import type { FC } from "react";

import { useRoundsData } from "@app/hooks/useRoundsData";
import { formatDate } from "@app/utils/timeUtils";
import Round from "@app/components/Round";

import "./roundsTable.less";

const RoundsTable: FC = () => {
  const { getAllRounds } = useRoundsData();
  const { data, error, isLoading } = getAllRounds();
  const [expandedRow, setExpandedRow] = useState<number | null>(null);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const toggleRow = (roundId: number): void => {
    if (expandedRow === roundId) {
      setExpandedRow(null);
    } else {
      setExpandedRow(roundId);
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
            {expandedRow === roundId && (
              <tr>
                <td colSpan={2} className='rounds-table__round-container'>
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
