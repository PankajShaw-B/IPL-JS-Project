function topEconomicalBowlers2015(matches, deliveries) {
  const matchIds2015 = matches
    .filter((match) => match.season === "2015")
    .map((match) => match.id);

  const bowlers = {};

  deliveries.forEach((delivery) => {
    if (matchIds2015.includes(delivery.match_id)) {
      const bowler = delivery.bowler;

      if (!bowlers[bowler]) {
        bowlers[bowler] = {
          runs: 0,
          balls: 0,
        };
      }

      bowlers[bowler].runs += Number(delivery.total_runs);
      bowlers[bowler].balls++;
    }
  });

  const economy = [];

  for (const bowler in bowlers) {
    const overs = bowlers[bowler].balls / 6;
    const eco = bowlers[bowler].runs / overs;

    economy.push({
      bowler,
      economy: Number(eco.toFixed(2)),
    });
  }

  economy.sort((a, b) => a.economy - b.economy);

  return economy.slice(0, 10);
}

module.exports = topEconomicalBowlers2015;