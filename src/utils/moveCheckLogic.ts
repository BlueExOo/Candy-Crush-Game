/**
 * If the column of four candies are the same color and not blank, then set the column of four candies
 * to blank.
 * @param {string[]} newBoard - string[] = the board
 * @param {number} boardSize - number = 7
 * @param {number} formulaForColumnOfFour - number = boardSize - 3
 * @returns A boolean value.
 */
export const isColumnOfFour = (
  newBoard: string[],
  boardSize: number,
  formulaForColumnOfFour: number
) => {
  for (let i: number = 0; i < formulaForColumnOfFour; i++) {
    const columnOfFour: number[] = [
      i,
      i + boardSize,
      i + boardSize * 2,
      i + boardSize * 3
    ];
    const deicedColor: string = newBoard[i]

    const isBlank: boolean = newBoard[i] === ''

    if(columnOfFour.every((candy: number) => newBoard[candy] === deicedColor && !isBlank)) {
      columnOfFour.forEach((candy: number) => newBoard[candy] = '')

      return true;
    }
  }
}

export const isColumnOfThree = (
  newBoard: string[],
  boardSize: number,
  formulaForColumnOfThree: number
) => {
  for (let i: number = 0; i < formulaForColumnOfThree; i++) {
    const columnOfThree: number[] = [
      i,
      i + boardSize,
      i + boardSize * 2,
    ];
    const deicedColor: string = newBoard[i]

    const isBlank: boolean = newBoard[i] === ''

    if(columnOfThree.every((candy: number) => newBoard[candy] === deicedColor && !isBlank)) {
      columnOfThree.forEach((candy: number) => newBoard[candy] = '')

      return true;
    }
  }
}

/**
 * It checks if there are four candies in a row, and if there are, it removes them.
 * @param {string[]} newBoard - string[] - This is the board that is being checked for a row of four.
 * @param {number} boardSize - number = 7;
 * @param {number[]} invalidMoves - number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
 * 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
 * @returns A boolean value.
 */
export const checkForRowOfFour = (
  newBoard: string[],
  boardSize: number,
  invalidMoves: number[]
) => {
  for (let i = 0; i < boardSize*boardSize; i++) {
    const rowOfFour = [i, i + 1, i + 2, i + 3];
    const deicedColor: string = newBoard[i]

    const isBlank: boolean = newBoard[i] === ''
    if (invalidMoves.includes(i)) continue;
      
    if(rowOfFour.every((candy: number) => newBoard[candy] === deicedColor && !isBlank)) {
      rowOfFour.forEach((candy: number) => newBoard[candy] = '')

      return true;
    }
    
  }
}

export const checkForRowOfThree = (
  newBoard: string[],
  boardSize: number,
  invalidMoves: number[]
) => {
  for (let i = 0; i < boardSize*boardSize; i++) {
    const rowOfThree = [i, i + 1, i + 2];
    const deicedColor: string = newBoard[i]

    const isBlank: boolean = newBoard[i] === ''
    if (invalidMoves.includes(i)) continue;
      
    if(rowOfThree.every((candy: number) => newBoard[candy] === deicedColor && !isBlank)) {
      rowOfThree.forEach((candy: number) => newBoard[candy] = '')

      return true;
    }
    
  }
}