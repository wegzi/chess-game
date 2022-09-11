//
export function pawnValidMoves(boardMatrix, pawnPosition) {
  console.log(boardMatrix, pawnPosition);

  console.log(
    "Found",
    boardMatrix[pawnPosition.geometry.coordinates[0]].cols[
      pawnPosition.geometry.coordinates[1]
    ]
  );
}
