import type { FC } from "react";

import { useRoundsData } from "@app/hooks/useRoundsData";
import {
  shouldRenderCell,
  getGridCellStyleAndClass,
} from "@app/utils/roundsCellsUtils";
import useLoadingAndError from '@app/hooks/useLoadingAndError';

import "./round.less";

interface RoundProps {
  roundId: number;
}

const Round: FC<RoundProps> = ({ roundId }) => {
  const { getRoundById } = useRoundsData();
  const { data, error, isLoading } = getRoundById(roundId);
  const loadingOrErrorComponent = useLoadingAndError({error, isLoading});

  if (loadingOrErrorComponent) return loadingOrErrorComponent;
  
  const items = data?.items.split(",") || [];

  return (
    <div className="rounds-table__round">
      {items.map((itemNumber, index) => {
        const { style, cellClassName } = getGridCellStyleAndClass(items, index);

        return (
          shouldRenderCell(items, index) && (
            <div
              className={`rounds-table__round__item ${cellClassName}`}
              style={style}
              key={index}
            >
              <img src={`/images/${itemNumber}.png`} />
            </div>
          )
        );
      })}
    </div>
  );
};

export default Round;
