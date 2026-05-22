function extraRuns2016(matches, deliveries) {
  const result = {};

  const matchIds2016 = matches
    .filter((match) => match.season === "2016")
    .map((match) => match.id);

  deliveries.forEach((delivery) => {
    if (matchIds2016.includes(delivery.match_id)) {
      const bowlingTeam = delivery.bowling_team;
      const extraRuns = Number(delivery.extra_runs);

      if (!result[bowlingTeam]) {
        result[bowlingTeam] = 0;
      }

      result[bowlingTeam] += extraRuns;
    }
  });

  return result;
}

module.exports = extraRuns2016;