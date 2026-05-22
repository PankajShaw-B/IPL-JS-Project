const csv = require("csvtojson");
const fs = require("fs");

const matchesPerYear = require("./server/1-matches-per-year");

async function main() {
  const matches = await csv().fromFile("data/matches.csv");
  const deliveries = await csv().fromFile("data/deliveries.csv");

  const result1 = matchesPerYear(matches);

  fs.writeFileSync(
    "src/public/output/matchesPerYear.json",
    JSON.stringify(result1, null, 2)
  );

  console.log("JSON files generated successfully!");
}

main();