/**
 * The formula for the column of the fourth square is the board size squared minus three times the
 * board size minus one.
 * @param {number} boardSize - number
 */
export const formulaForColumnOfFour = (boardSize: number) => boardSize * boardSize - (boardSize + boardSize + boardSize) - 1

export const formulaForColumnOfThree = (boardSize: number) => boardSize * boardSize - (boardSize + boardSize + boardSize) - 1

export const formulaForMoveBelow = (boardSize: number) => boardSize * boardSize - (boardSize + boardSize + boardSize) - 1

/**
 * It takes a board size and a boolean and returns an array of numbers
 * @param {number} boardSize - number - The size of the board.
 * @param {boolean} [isFour=false] - boolean = false
 * @returns An array of numbers.
 */
export const generateInvalidMoves = (
  boardSize: number,
  isFour: boolean = false
) => {
  const invalidMoves: Array<number> = [];
  for (let i: number = boardSize; i <= boardSize * boardSize; i += boardSize) {
    if (isFour) invalidMoves.push(i - 3);
    invalidMoves.push(i - 2);
    invalidMoves.push(i - 1);
  }
  return invalidMoves;
};