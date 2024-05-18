import React, { useState, useEffect } from "react";

const ROWS = 20;
const COLS = 20;

const createBoard = () => {
  const board = [];
  for (let i = 0; i < ROWS; i++) {
    board.push(Array.from(Array(COLS), () => 0));
  }
  return board;
};

const SnakeGame = () => {
  const [board, setBoard] = useState(createBoard());
  const [snake, setSnake] = useState([{ row: 10, col: 10 }]);
  const [food, setFood] = useState({ row: 5, col: 5 });
  const [direction, setDirection] = useState("RIGHT");

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.keyCode === 38) setDirection("UP");
      if (event.keyCode === 40) setDirection("DOWN");
      if (event.keyCode === 37) setDirection("LEFT");
      if (event.keyCode === 39) setDirection("RIGHT");
    };
    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, []);

  useEffect(() => {
    const moveSnake = () => {
      const head = snake[0];
      const newHead = {
        row:
          head.row + (direction === "UP" ? -1 : direction === "DOWN" ? 1 : 0),
        col:
          head.col +
          (direction === "LEFT" ? -1 : direction === "RIGHT" ? 1 : 0),
      };
      if (
        newHead.row < 0 ||
        newHead.row >= ROWS ||
        newHead.col < 0 ||
        newHead.col >= COLS
      ) {
        alert("Game Over!");
        setSnake([{ row: 10, col: 10 }]);
        setDirection("RIGHT");
        setFood({
          row: Math.floor(Math.random() * ROWS),
          col: Math.floor(Math.random() * COLS),
        });
        setBoard(createBoard());
        return;
      }
      if (board[newHead.row][newHead.col] === 1) {
        alert("Game Over!");
        setSnake([{ row: 10, col: 10 }]);
        setDirection("RIGHT");
        setFood({
          row: Math.floor(Math.random() * ROWS),
          col: Math.floor(Math.random() * COLS),
        });
        setBoard(createBoard());
        return;
      }
      const newSnake = [newHead, ...snake.slice(0, -1)];
      if (newHead.row === food.row && newHead.col === food.col) {
        setFood({
          row: Math.floor(Math.random() * ROWS),
          col: Math.floor(Math.random() * COLS),
        });
        newSnake.push(snake[snake.length - 1]);
      }
      setSnake(newSnake);
      const newBoard = createBoard();
      newSnake.forEach((cell) => (newBoard[cell.row][cell.col] = 1));
      setBoard(newBoard);
    };
    const intervalId = setInterval(moveSnake, 100);
    return () => clearInterval(intervalId);
  }, [snake, direction, food, board]);

  return (
    <div>
      {board.map((row, rowIndex) => (
        <div key={rowIndex} style={{ display: "flex" }}>
          {row.map((cell, colIndex) => (
            <div
              key={colIndex}
              style={{
                width: 20,
                height: 20,
                backgroundColor:
                  cell === 1
                    ? "black"
                    : food.row === rowIndex && food.col === colIndex
                    ? "red"
                    : "white",
                border: "1px solid gray",
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default SnakeGame;
