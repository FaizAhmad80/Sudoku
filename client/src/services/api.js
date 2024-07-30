const apiUrl = 'https://sudoku-game-server.vercel.app';
export const REST = {
  getBoard: function () {
    return fetch(`${apiUrl}/api/puzzle`);
  },
  solveBoard: function (grid) {
    const data = {
      board: grid,
    };
    return fetch(`${apiUrl}/api/solve`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  },
  validateBoard: function (grid) {
    const data = {
      board: grid,
    };
    return fetch(`${apiUrl}/api/validate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  },
};

// export const REST = {
//   getBoard: function () {
//     return fetch(`${apiUrl}/puzzle`);
//   },
//   solveBoard: function (grid) {
//     const data = {
//       board: grid,
//     };
//     return fetch(`${apiUrl}/solve`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     });
//   },
//   validateBoard: function (grid) {
//     const data = {
//       board: grid,
//     };
//     return fetch(`${apiUrl}/validate`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     });
//   },
// };
