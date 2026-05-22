function matchesWonPerTeamPerYear(matches) {
  const result = {};

  matches.forEach((match) => {
    const season = match.season;
    const winner = match.winner;

    if (!winner) return;

    if (!result[season]) {
      result[season] = {};
    }

    if (!result[season][winner]) {
      result[season][winner] = 0;
    }

    result[season][winner]++;
  });

  return result;
}

module.exports = matchesWonPerTeamPerYear;