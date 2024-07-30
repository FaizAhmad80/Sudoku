import express from "express";
// const express = require('express');
import cors from "cors";
// const cors = require('cors');

import { Sudoku } from "./Sudoku.js";
import { Util } from "./Util.js";

const app = express();

let board = [
  [3, 0, 6, 5, 0, 8, 4, 0, 0],
  [5, 2, 0, 0, 0, 0, 0, 0, 0],
  [0, 8, 7, 0, 0, 0, 0, 3, 1],
  [0, 0, 3, 0, 1, 0, 0, 8, 0],
  [9, 0, 0, 8, 6, 3, 0, 0, 5],
  [0, 5, 0, 0, 9, 0, 6, 0, 0],
  [1, 3, 0, 0, 0, 0, 2, 5, 0],
  [0, 0, 0, 0, 0, 0, 0, 7, 4],
  [0, 0, 5, 2, 0, 6, 3, 0, 0],
];

app.use(express.json());
app.use(cors(
//   {
//   origin: 'https://sudoku-game-server.vercel.app'
// }
));

const port = 5000;
app.listen(port, () => {
  console.log("Server is running on port 5000");
});

app.get('/', (req, res) => {
  res.send('Welcome to the home page!');
});

app.get("/puzzle", (req, res) => {
  let sudoku = new Sudoku();
  let puzzle = sudoku.puzzle;
  res.status(200).send({ game: puzzle });
});

app.post("/solve", (req, res) => {
  let puzzle = [];
  Util.copyGrid(req.body.board, puzzle);
  let sudoku = new Sudoku(puzzle);
  let solution = sudoku.isSolvable();
  let solvedSudoku;
  let status;
  if (solution) {
    solvedSudoku = sudoku.solvedPuzzle;
    status = true;
  } else {
    solvedSudoku = req.body.board;
    status = false;
  }
  res.status(200).send({ solution: solvedSudoku, status: status });
});

app.post("/validate", (req, res) => {
  let puzzle = [];
  Util.copyGrid(req.body.board, puzzle);
  let sudoku = new Sudoku(puzzle);
  let status = sudoku.validate();
  res.status(200).send({ status: status });
});
