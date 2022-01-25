import React from "react";
import styled from "styled-components";

export default function Board({ matriz }) {
  console.log(matriz);
  return (
    <div className="flex justify-center mt-5">
      <div>
        <BoardContent ySize={matriz.length}>
          <BoardContainer>
            {matriz.map((x, xIndex) => (
              <BoardRow key={xIndex}>
                {x.cols.map((y) => (
                  <BoardCell dim={y.dim} key={y.key}>
                    <CellKey>{y.key}</CellKey>
                    <Pieace>{y.piece.name}</Pieace>
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
  font-size: 0.75em;
  font-weight: 500;
  opacity: 0.5;
`;
const Pieace = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  line-height: 1;
  font-size: 0.75em;
  font-weight: 500;
  transform: translateX(-50%) translateY(-50%);
`;
