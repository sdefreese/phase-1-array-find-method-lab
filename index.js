function superbowlWin(record) {
  const winner = record.find((game) => game.result === "W");
  if (winner) {
    return winner.year;
  }
}
