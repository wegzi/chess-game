import React from "react";
import styled from "styled-components";
import { pawnValidMoves } from "./moves";

export default function Board({ matrix }) {
  console.log(matrix);
  return (
    <div className="flex justify-center mt-5">
      <div>
        <BoardContent ySize={matrix.length}>
          <BoardContainer>
            {matrix.map((yAxis, yIndex) => (
              <BoardRow key={yIndex}>
                {yAxis.cols.map((xAxis, xIndex) => (
                  <BoardCell dim={!((xIndex + yIndex) % 2)} key={xAxis.key}>
                    <CellKey>{xAxis.key}</CellKey>
                    {xAxis.piece.name && (
                      <Piece
                        className="rounded-xl"
                        piece={xAxis.piece}
                        onClick={() => pawnValidMoves(matrix, xAxis)}
                      >
                        {xAxis.piece.name}
                      </Piece>
                    )}
                  </BoardCell>
                ))}
              </BoardRow>
            ))}
          </BoardContainer>
        </BoardContent>
      </div>
    </div>
  );
}

const BoardRow = styled.div`
  display: grid;
  grid-template-columns: repeat(8, minmax(0px, 1fr));
  gap: 0rem;
`;

const BoardCell = styled.div`
  position: relative;
  background-color: ${({ dim }) => (dim ? "#888" : "#fff")};
  color: ${({ dim }) => (dim ? "#fff" : "#888")};
  grid-column: span 1 / span 1;
  width: 70px;
  height: 70px;
  display: flex;
  user-select: none;
`;
const BoardContent = styled.div`
  width: ${({ ySize }) => `calc(70px * ${ySize})`};
`;
const BoardContainer = styled.div`
  width: ${({ ySize }) => `calc(70px * ${ySize})`};
  border: solid 1px #888;
`;

const CellKey = styled.div`
  position: absolute;
  left: 3px;
  top: 3px;
  line-height: 1;
  font-size: 0.6em;
  font-weight: 500;
  opacity: 0.5;
`;
const Piece = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  line-height: 1;
  font-size: 0.75em;
  font-weight: 500;
  transform: translateX(-50%) translateY(-50%);
  background: ${({ piece }) => PIECE_THEME[piece.type]};
  color: ${({ piece }) => PIECE_LABEL_THEME[piece.type]};

  width: 60%;
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PIECE_THEME = {
  white: "#d5d5d5",
  black: "#555555",
};
const PIECE_LABEL_THEME = {
  white: "#555555",
  black: "#d5d5d5",
};
