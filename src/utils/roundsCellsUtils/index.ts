import type { CSSProperties } from "react";

const COLUMNS_NUMBER = 5;

const shouldRenderCell = (items: string[], index: number): boolean => {
  const item = items[index];

  // Check if there are already rendered '4'
  if (
    item === "4" &&
    index >= COLUMNS_NUMBER &&
    items[index - COLUMNS_NUMBER] === "4"
  ) {
    return false; // we already have rendered the cell '4', no need for additional cell
  }

  return true;
};

const getGridClassName = (rowSpanLength: number): string =>
  rowSpanLength > 1
    ? "rounds-table__round__specific-item"
    : "rounds-table__round__single-item";

const getGridCellStyleAndClass = (
  items: string[],
  index: number
): {
  style: CSSProperties;
  cellClassName: string;
} => {
  let style: CSSProperties = {};
  let rowSpan = 1;

  if (items[index] === "4") {
    while (
      index + rowSpan * COLUMNS_NUMBER < items.length &&
      items[index + rowSpan * COLUMNS_NUMBER] === "4"
    ) {
      rowSpan++;
    }
    if (rowSpan > 1) {
      style.gridRow = `span ${rowSpan}`;
    }
  }

  return {
    style,
    cellClassName: getGridClassName(rowSpan),
  };
};

export { shouldRenderCell, getGridCellStyleAndClass };
