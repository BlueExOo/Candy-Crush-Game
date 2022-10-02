import React from "react";
import { useAppSelector } from "../store/hooks";
import Tile from "./Tile";

const Board = () => {
  const board = useAppSelector(({ candyCrush: { board } }) => board);
  const boardSize = useAppSelector(
    ({ candyCrush: { boardSize } }) => boardSize
  );

  return (
    <div
      className={`flex flex-wrap rounded-lg`}
      style={{
        width: `${115 * boardSize}px`,
        marginInlineStart: `${7 * boardSize}px`,
      }}
    >
      {board.map((candy: string, index: number) => (
        <Tile candy={candy} key={index} candyId={index} />
      ))}
    </div>
  );
};

export default Board;
