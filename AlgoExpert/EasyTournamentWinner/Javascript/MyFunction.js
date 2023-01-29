//Time: O(n)
//Space: O(t)
//t = amount of teams in the competition

const LOCAL_TEAM_WON = 1;
function tournamentWinner(competitions, results) {
  let scores = new Map();

  for (let i = 0; i < competitions.length; i++) {
    const localTeam = competitions[i][0];
    const awayTeam = competitions[i][1];
    if (!scores.has(localTeam)) scores.set(localTeam, 0);
    if (!scores.has(awayTeam)) scores.set(awayTeam, 0);
    if (results[i] === LOCAL_TEAM_WON)
      scores.set(localTeam, scores.get(localTeam) + 3);
    else scores.set(awayTeam, scores.get(awayTeam) + 3);
  }
  let winner = [...scores.entries()].reduce((a, b) => (b[1] > a[1] ? b : a));
  return winner[0];
}

// Do not edit the line below.
exports.tournamentWinner = tournamentWinner;
