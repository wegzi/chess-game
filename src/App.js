import Board from "./Board";

const START_POSITION = {
  "A:1": { type: "white", name: "rook", key: "white:rook" },
  "B:1": { type: "white", name: "knight", key: "white:knight" },
  "C:1": { type: "white", name: "bishop", key: "white:bishop" },
  "D:1": { type: "white", name: "queen", key: "white:queen" },
  "E:1": { type: "white", name: "king", key: "white:king" },
  "F:1": { type: "white", name: "bishop", key: "white:bishop" },
  "G:1": { type: "white", name: "knight", key: "white:knight" },
  "H:1": { type: "white", name: "rook", key: "white:rook" },

  "A:2": { type: "white", name: "pawn", key: "white:pawn" },
  "B:2": { type: "white", name: "pawn", key: "white:pawn" },
  "C:2": { type: "white", name: "pawn", key: "white:pawn" },
  "D:2": { type: "white", name: "pawn", key: "white:pawn" },
  "E:2": { type: "white", name: "pawn", key: "white:pawn" },
  "F:2": { type: "white", name: "pawn", key: "white:pawn" },
  "G:2": { type: "white", name: "pawn", key: "white:pawn" },
  "H:2": { type: "white", name: "pawn", key: "white:pawn" },

  // blacks

  "A:8": { type: "white", name: "rook", key: "white:rook" },
  "B:8": { type: "white", name: "knight", key: "white:knight" },
  "C:8": { type: "white", name: "bishop", key: "white:bishop" },
  "D:8": { type: "white", name: "queen", key: "white:queen" },
  "E:8": { type: "white", name: "king", key: "white:king" },
  "F:8": { type: "white", name: "bishop", key: "white:bishop" },
  "G:8": { type: "white", name: "knight", key: "white:knight" },
  "H:8": { type: "white", name: "rook", key: "white:rook" },

  "A:7": { type: "white", name: "pawn", key: "white:pawn" },
  "B:7": { type: "white", name: "pawn", key: "white:pawn" },
  "C:7": { type: "white", name: "pawn", key: "white:pawn" },
  "D:7": { type: "white", name: "pawn", key: "white:pawn" },
  "E:7": { type: "white", name: "pawn", key: "white:pawn" },
  "F:7": { type: "white", name: "pawn", key: "white:pawn" },
  "G:7": { type: "white", name: "pawn", key: "white:pawn" },
  "H:7": { type: "white", name: "pawn", key: "white:pawn" },
};

const Y_RULE_NAMES = ["A", "B", "C", "D", "E", "F", "G", "H"];
function createMatriz(whiteBottom) {
  const x = new Array(8).fill(0);

  const board = x.map((_, xIndex) => {
    const y = new Array(8).fill(xIndex).map((_, yIndex) => {
      const value = Y_RULE_NAMES[yIndex];
      const key = `${value}:${xIndex + 1}`;
      const piece = START_POSITION[key] ?? {};
      return {
        key: key,
        value: value,
        dim: !((yIndex + xIndex) % 2),
        piece: piece,
      };
    });
    return { value: xIndex, cols: y };
  });
  return board.reverse();
}

export default function App() {
  const matriz = createMatriz();

  return (
    <div className="App">
      <Board matriz={matriz} />
    </div>
  );
}
