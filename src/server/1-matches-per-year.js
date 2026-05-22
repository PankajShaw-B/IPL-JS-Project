function matchesPerYear(matches) {
  const result = {};

  matches.forEach((match) => {
    const season = match.season;

    if (!result[season]) {
      result[season] = 0;
    }

    result[season]++;
  });

  return result;
}

module.exports = matchesPerYear;