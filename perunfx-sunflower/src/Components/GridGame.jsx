import React, { useState } from 'react';

const getRandomSize = () => Math.floor(Math.random() * 5) + 3; // Random size between 3x3 and 7x7

const GameGrid = () => {
  const initialSize = 3;
  const [size, setSize] = useState(initialSize);
  const [grid, setGrid] = useState(Array(initialSize * initialSize).fill(null));
  const [moves, setMoves] = useState(0);
  const [score, setScore] = useState(0);

  const handleCellClick = (index) => {
    if (grid[index] !== null) return;

    const newGrid = [...grid];
    const isEven = index % 2 === 0;
    newGrid[index] = isEven ? '○' : '×';

    setGrid(newGrid);
    setMoves(moves + 1);
    setScore(score + (isEven ? 1 : -1));
  };

  const resetToInitial = () => {
    setSize(initialSize);
    setGrid(Array(initialSize * initialSize).fill(null));
    setMoves(0);
    setScore(0);
  };

  const randomizeGrid = () => {
    const newSize = getRandomSize();
    setSize(newSize);
    setGrid(Array(newSize * newSize).fill(null));
    setMoves(0);
    setScore(0);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Click Game Grid</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${size}, 60px)`,
        gap: '10px',
        marginBottom: '20px'
      }}>
        {grid.map((cell, index) => (
          <button
            key={index}
            onClick={() => handleCellClick(index)}
            style={{
              width: '60px',
              height: '60px',
              fontSize: '24px',
              cursor: cell ? 'default' : 'pointer'
            }}
            disabled={cell !== null}
          >
            {cell}
          </button>
        ))}
      </div>

      <div style={{ marginBottom: '10px' }}>
        <button onClick={randomizeGrid} style={{ marginRight: '10px' }}>
          Randomize Grid
        </button>
        <button onClick={resetToInitial}>Reset to Initial</button>
      </div>

      <div>
        <strong>Moves:</strong> {moves} &nbsp; | &nbsp;
        <strong>Score:</strong> {score}
      </div>
    </div>
  );
};

export default GameGrid;