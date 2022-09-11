import Board from "./Board";
import { v4 as uuid } from "uuid";

const START_POSITION = {
  "A:1": { _id: uuid(), type: "white", name: "rook", key: "white:rook" },
  "B:1": { _id: uuid(), type: "white", name: "knight", key: "white:knight" },
  "C:1": { _id: uuid(), type: "white", name: "bishop", key: "white:bishop" },
  "D:1": { _id: uuid(), type: "white", name: "queen", key: "white:queen" },
  "E:1": { _id: uuid(), type: "white", name: "king", key: "white:king" },
  "F:1": { _id: uuid(), type: "white", name: "bishop", key: "white:bishop" },
  "G:1": { _id: uuid(), type: "white", name: "knight", key: "white:knight" },
  "H:1": { _id: uuid(), type: "white", name: "rook", key: "white:rook" },

  "A:2": { _id: uuid(), type: "white", name: "pawn", key: "white:pawn" },
  "B:2": { _id: uuid(), type: "white", name: "pawn", key: "white:pawn" },
  "C:2": { _id: uuid(), type: "white", name: "pawn", key: "white:pawn" },
  "D:2": { _id: uuid(), type: "white", name: "pawn", key: "white:pawn" },
  "E:2": { _id: uuid(), type: "white", name: "pawn", key: "white:pawn" },
  "F:2": { _id: uuid(), type: "white", name: "pawn", key: "white:pawn" },
  "G:2": { _id: uuid(), type: "white", name: "pawn", key: "white:pawn" },
  "H:2": { _id: uuid(), type: "white", name: "pawn", key: "white:pawn" },

  // blacks

  "A:8": { _id: uuid(), type: "black", name: "rook", key: "black:rook" },
  "B:8": { _id: uuid(), type: "black", name: "knight", key: "black:knight" },
  "C:8": { _id: uuid(), type: "black", name: "bishop", key: "black:bishop" },
  "D:8": { _id: uuid(), type: "black", name: "queen", key: "black:queen" },
  "E:8": { _id: uuid(), type: "black", name: "king", key: "black:king" },
  "F:8": { _id: uuid(), type: "black", name: "bishop", key: "black:bishop" },
  "G:8": { _id: uuid(), type: "black", name: "knight", key: "black:knight" },
  "H:8": { _id: uuid(), type: "black", name: "rook", key: "black:rook" },

  "A:7": { _id: uuid(), type: "black", name: "pawn", key: "black:pawn" },
  "B:7": { _id: uuid(), type: "black", name: "pawn", key: "black:pawn" },
  "C:7": { _id: uuid(), type: "black", name: "pawn", key: "black:pawn" },
  "D:7": { _id: uuid(), type: "black", name: "pawn", key: "black:pawn" },
  "E:7": { _id: uuid(), type: "black", name: "pawn", key: "black:pawn" },
  "F:7": { _id: uuid(), type: "black", name: "pawn", key: "black:pawn" },
  "G:7": { _id: uuid(), type: "black", name: "pawn", key: "black:pawn" },
  "H:7": { _id: uuid(), type: "black", name: "pawn", key: "black:pawn" },
};

const Y_RULE_NAMES = ["A", "B", "C", "D", "E", "F", "G", "H"];

/**
 *    A   B   C   D
 *    y   y   y   y  = longitude
 *    ↑   ↑   ↑   ↑
 * [ 0:0 1:0 2:0 3:0 ] → x 1
 * [ 0:1 1:1 2:1 3:1 ] → x 2
 * [ 0:2 1:2 2:2 3:2 ] → x 3
 * [ 0:3 1:3 2:3 3:3 ] → x 4
 *                       ↓
 *                       latitude
 *
 * longitude:latitude
 */

function createMatrix(boardSize = 8) {
  const yAxis = new Array(boardSize).fill(0);

  const board = yAxis.map((_, yIndex) => {
    const xAxis = new Array(boardSize).fill(yIndex).map((_, xIndex) => {
      const value = Y_RULE_NAMES[xIndex];
      const key = `${value}:${yIndex + 1}`;
      const piece = START_POSITION[key] ?? {};
      return {
        geometry: {
          type: "Point",
          coordinates: [yIndex, xIndex],
        },
        key: key,
        value: value,
        piece: piece,
      };
    });
    return { value: yIndex, cols: xAxis };
  });
  return board;
}

export default function App() {
  const matrix = createMatrix();

  return (
    <div className="App">
      <Board matrix={matrix} />
    </div>
  );
}
