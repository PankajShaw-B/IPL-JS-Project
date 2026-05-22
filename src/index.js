const csv = require("csvtojson");
const fs = require("fs");

const matchesPerYear = require("./server/1-matches-per-year");
const matchesWonPerTeamPerYear = require("./server/2-matches-won-per-team-per-year");
const extraRuns2016 = require("./server/3-extra-runs-2016");
const topEconomicalBowlers2015 = require("./server/4-top-economical-bowlers-2015");

async function main() {
  const matches = await csv().fromFile("data/matches.csv");
  const deliveries = await csv().fromFile("data/deliveries.csv");

  const result1 = matchesPerYear(matches);
  const result2 = matchesWonPerTeamPerYear(matches);
  const result3 = extraRuns2016(matches, deliveries);
  const result4 = topEconomicalBowlers2015(matches, deliveries);

  fs.writeFileSync(
    "src/public/output/matchesPerYear.json",
    JSON.stringify(result1, null, 2)
  );

  fs.writeFileSync(
    "src/public/output/matchesWonPerTeamPerYear.json",
    JSON.stringify(result2, null, 2)
  );

  fs.writeFileSync(
    "src/public/output/extraRuns2016.json",
    JSON.stringify(result3, null, 2)
  );

  fs.writeFileSync(
    "src/public/output/topEconomicalBowlers2015.json",
    JSON.stringify(result4, null, 2)
  );
  
  console.log("JSON files generated successfully!");
}

main();