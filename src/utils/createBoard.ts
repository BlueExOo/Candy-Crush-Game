import { candies } from "./candyData";

/**
 * It creates an array of length boardSize*boardSize, fills it with nulls, and then maps over it to
 * fill it with random candies
 * @param {number} [boardSize=8] - number=8
 */
export const createBoard = (boardSize: number=8) => Array(boardSize*boardSize).fill(null).map(()=>candies[Math.floor(Math.random() * candies.length)])