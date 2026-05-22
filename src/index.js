const csv = require("csvtojson");
const fs = require("fs");

const matchesPerYear = require("./server/1-matches-per-year");
const matchesWonPerTeamPerYear = require("./server/2-matches-won-per-team-per-year");

async function main() {
  const matches = await csv().fromFile("data/matches.csv");
  const deliveries = await csv().fromFile("data/deliveries.csv");

  // const result1 = matchesPerYear(matches);
  const result2 = matchesWonPerTeamPerYear(matches);

  // fs.writeFileSync(
  //   "src/public/output/matchesPerYear.json",
  //   JSON.stringify(result1, null, 2)
  // );

  fs.writeFileSync(
    "src/public/output/matchesWonPerTeamPerYear.json",
    JSON.stringify(result2, null, 2)
  );

  console.log("JSON files generated successfully!");
}

main();